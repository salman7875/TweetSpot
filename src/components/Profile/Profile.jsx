/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { KeyboardBackspace, CalendarMonth } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ProfileTweets from '../../pages/ProfileTweets/ProfileTweets'
import classes from './profile.module.css'
import { month } from '../../data'

const Profile = () => {
  const [currentUser, setCurrentUser] = useState('')
  const [tweets, setTweets] = useState()
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate('/')
  }

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const res = await fetch(
        'https://tweetspot-backend.onrender.com/api/current',
        {
          headers: { Authorization: 'Bearer ' + token }
        }
      )
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

  const date = new Date(currentUser.createdAt)
  const getMonth = date.getMonth()
  const getYear = date.getFullYear()

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.nav}>
          <KeyboardBackspace
            fontSize='large'
            className={classes.iconBack}
            onClick={handleGoBack}
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
              <CalendarMonth fontSize='medium' color='#555' />
              <span>
                Joined {month[getMonth]} {getYear}
              </span>
            </div>

            <p className={classes.bio}>{currentUser.bio}</p>

            <div className={classes.followings}>
              <Link to={`/${currentUser._id?.toString()}/followings`}>
                {currentUser.followings?.length}
                <span>Followings</span>
              </Link>
              <Link to={`/${currentUser._id?.toString()}/followers`}>
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
            <ProfileTweets
              key={tweet._id}
              id={currentUser._id}
              name={currentUser.name}
              avatar={currentUser.avatar}
              tweet={tweet}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile
