/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import LoopIcon from '@mui/icons-material/Loop'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import classes from './profile.module.css'
import { json, useLoaderData } from 'react-router-dom'
import { getAuthToken } from '../../utils/auth'
import { useEffect, useState } from 'react'

const Profile = () => {
  const [tweets, setTweets] = useState([])
  const currentUser = useLoaderData()

  useEffect(() => {
    const fetchTweets = async () => {
      const token = getAuthToken()

      const res = await fetch('http://localhost:5000/api/tweets/current', {
        headers: { Authorization: 'Bearer ' + token }
      })

      const data = await res.json()
      setTweets(data.tweets)
    }
    fetchTweets()
  }, [])

  console.log(tweets)

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
            <p>{currentUser.tweets.length} Tweets</p>
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
          <a href='#' className={classes.editProfile}>
            Edit Profile
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
                {currentUser.followers.length}
                <span>Followings</span>
              </a>
              <a href='#'>
                {currentUser.followings.length}
                <span>Followers</span>
              </a>
            </div>
          </div>
        </div>

        {tweets.map(tweet => (
          <div className={classes.userTweet} key={tweet._id}>
            <div className={classes.head}>
              <h2>Tweet</h2>
            </div>
            <div className={classes.tweetCard}>
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
          </div>
        ))}
      </div>
    </div>
  )
}

export default Profile

export const getCurrentProfile = async ({ request, params }) => {
  const token = getAuthToken()

  const res = await fetch('http://localhost:5000/api/current', {
    headers: { Authorization: 'Bearer ' + token }
  })

  if (!res.ok) {
    throw json({ message: 'Something went wrong!' }, { status: 500 })
  }

  return res
}
