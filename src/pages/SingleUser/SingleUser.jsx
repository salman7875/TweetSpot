/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import LoopIcon from '@mui/icons-material/Loop'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import classes from './SingleUser.module.css'
import { json, useLoaderData } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getAuthToken } from '../../utils/auth'

const SingleUser = () => {
  const [tweets, setTweets] = useState()
  const [followed, setFollowed] = useState(false)
  const data = useLoaderData()
  const currentUser = data.user

  useEffect(() => {
    const getTweets = async id => {
      const res = await fetch('http://localhost:5000/api/tweets/' + id)
      const data = await res.json()
      setTweets(data.tweets)
    }
    getTweets(currentUser._id)
  }, [currentUser._id])

  const followHandler = async id => {
    const token = getAuthToken()
    const res = await fetch('http://localhost:5000/api/users/follow/' + id, {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + token }
    })

    if (!res.ok) {
      throw json({ message: 'Something Went Wrong!' }, { status: 500 })
    } else {
      console.log('Done')
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.nav}>
          <KeyboardBackspaceIcon
            fontSize='large'
            className={classes.iconBack}
          />
          <div>
            <h2>{currentUser.name}</h2>
            <p>{currentUser.tweets?.length} Tweets</p>
          </div>
        </div>
        <div className={classes.userBg}>
          <img src={currentUser.bgImg} alt='bg-img' className={classes.bgImg} />
          <img
            src={currentUser.avatar}
            alt='avatar'
            className={classes.avatar}
          />
        </div>
        <div className={classes.user}>
          <a
            href='#'
            className={classes.editProfile}
            onClick={() => followHandler(currentUser._id)}
          >
            {followed ? 'Follow' : 'Unfollow'}
          </a>
          <div className={classes.userInfo}>
            <h3>{currentUser.name}</h3>
            <p>@{currentUser.username}</p>

            <div className={classes.date}>
              <CalendarMonthIcon fontSize='medium' color='#555' />
              <span>Joined September 2022</span>
            </div>

            <p className={classes.bio}>{currentUser.bio}</p>

            <div className={classes.followings}>
              <a href='#'>
                {currentUser.followings?.length}
                <span>Followings</span>
              </a>
              <a href='#'>
                {currentUser.followers?.length}
                <span>Followers</span>
              </a>
            </div>
          </div>
        </div>

        <div className={classes.userTweet}>
          <div className={classes.head}>
            <h2>Tweet</h2>
          </div>
          {tweets?.map(tweet => (
            <div className={classes.tweetCard} key={tweet._id}>
              <div className={classes.cardInfo}>
                <img src={currentUser.avatar} alt={currentUser.name} />
                <p>{currentUser.name}</p>
              </div>
              <div className={classes.tweet}>
                <p>{tweet.content}</p>
              </div>
              <div className={classes.action}>
                <div className={classes.like}>
                  <FavoriteBorderIcon />
                  <span>{tweet.likes.length}</span>
                </div>
                <div className={classes.comment}>
                  <ChatBubbleOutlineIcon />
                  <span>{tweet.comments.length}</span>
                </div>
                <div className={classes.share}>
                  <LoopIcon />
                  <span>1</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SingleUser

export const getSingleUser = async ({ request, params }) => {
  const id = params.id
  const res = await fetch('http://localhost:5000/api/users/' + id)

  if (!res.ok) {
    throw json({ message: 'Something went wrong!' }, { status: 500 })
  }

  return res
}
