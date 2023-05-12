/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import LoopIcon from '@mui/icons-material/Loop'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import classes from './profile.module.css'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/authContext'
import Comments from '../Comments/Comments'

const Profile = () => {
  // const { currentUser } = useContext(AuthContext)
  const [currentUser, setCurrentUser] = useState('')
  const [tweets, setTweets] = useState()
  const token = localStorage.getItem('token')

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const res = await fetch('http://localhost:5000/api/current', {
        headers: { Authorization: 'Bearer ' + token }
      })
      const data = await res.json()
      setCurrentUser(data)
    }
    fetchCurrentUser()
  }, [token])

  useEffect(() => {
    const fetchUserTweets = async () => {
      const res = await fetch('http://localhost:5000/api/tweets/current', {
        headers: { Authorization: 'Bearer ' + token }
      })
      const data = await res.json()
      setTweets(data.tweets)
    }
    fetchUserTweets()
  }, [currentUser, token])

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
              <Link to='/followings'>
                {currentUser.followings?.length}
                <span>Followings</span>
              </Link>
              <Link to='/followers'>
                {currentUser.followers?.length}
                <span>Followers</span>
              </Link>
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
                <img src={currentUser.avatar} />
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

export default Profile
