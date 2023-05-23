/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { KeyboardBackspace, CalendarMonth } from '@mui/icons-material'
import classes from './SingleUser.module.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/authContext'
import ProfileTweets from '../ProfileTweets/ProfileTweets'
import { month } from '../../data'
import { BASE_URL } from '../../utils/request'

const SingleUser = () => {
  const location = useLocation()
  const userId = location.pathname.split('/')[2]
  const [user, setUser] = useState()
  const [tweets, setTweets] = useState()
  const [follow, setFollowed] = useState(false)
  const { token } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate('/')
  }

  // GET USER
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(BASE_URL + '/api/users/' + userId)
      const data = await res.json()
      setUser(data.user)
    }
    fetchUser()
  }, [userId])

  // GET USER TWEET
  useEffect(() => {
    const fetchTweets = async () => {
      const res = await fetch(BASE_URL + '/api/tweets/' + userId)
      const data = await res.json()
      setTweets(data.tweets)
    }
    fetchTweets()
  }, [userId])

  const followHandler = async () => {
    console.log(userId)
    const res = await fetch(BASE_URL + '/api/users/follow/' + userId, {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + token }
    })
    if (res.ok) {
      console.log('Followed')
    } else {
      console.log('Something went wrong!')
    }
  }

  const likeHandler = async id => {
    const res = await fetch(BASE_URL + '/api/tweets/action/' + id, {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + token }
    })
    if (res.ok) {
      console.log('Liked')
    }
  }

  const date = new Date(user?.createdAt)
  const getMonth = date.getMonth()
  const getYear = date.getFullYear()

  return (
    <div className={classes.container}>
      {user && (
        <div className={classes.wrapper}>
          <div className={classes.nav}>
            <KeyboardBackspace
              fontSize='large'
              className={classes.iconBack}
              onClick={handleGoBack}
            />
            <div>
              <h2>{user.name}</h2>
              <p>{user.tweets?.length} Tweets</p>
            </div>
          </div>
          <div className={classes.userBg}>
            <img src={user.bgImg} alt='bg-img' className={classes.bgImg} />
            <img src={user.avatar} alt='avatar' className={classes.avatar} />
          </div>
          <div className={classes.user}>
            <a href='#' className={classes.editProfile} onClick={followHandler}>
              {follow ? 'Unfollow' : 'Follow'}
            </a>
            <div className={classes.userInfo}>
              <h3>{user.name}</h3>
              <p>@{user.username}</p>

              <div className={classes.date}>
                <CalendarMonth fontSize='medium' color='#555' />
                <span>
                  Joined {month[getMonth]} {getYear}
                </span>
              </div>

              <p className={classes.bio}>{user.bio}</p>

              <div className={classes.followings}>
                <Link to={`/${user._id.toString()}/followings`}>
                  {user.followings?.length}
                  <span>Followings</span>
                </Link>
                <Link to={`/${user._id.toString()}/followers`}>
                  {user.followers?.length}
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
                id={user._id}
                avatar={user.avatar}
                name={user.name}
                tweet={tweet}
              />
            ))}
          </div>
          {tweets?.length < 1 && (
            <h1
              style={{
                textAlign: 'center',
                fontSize: '3rem',
                fontWeight: '300',
                marginBottom: '2rem'
              }}
            >
              No Tweet Posted!
            </h1>
          )}
        </div>
      )}
    </div>
  )
}

export default SingleUser
