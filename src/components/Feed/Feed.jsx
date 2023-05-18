/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import classes from './feed.module.css'
import { FavoriteBorder, Loop, ChatBubbleOutline } from '@mui/icons-material'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/authContext'
import Comments from '../Comments/Comments'
import { Link } from 'react-router-dom'
import Feeds from '../../pages/Feeds'

const Feed = () => {
  const [feed, setFeed] = useState()
  const { token } = useContext(AuthContext)

  useEffect(() => {
    const fetchFeed = async () => {
      const res = await fetch('http://localhost:5000/api/feed', {
        headers: { Authorization: 'Bearer ' + token }
      })
      const data = await res.json()
      setFeed(data.tweets)
    }
    fetchFeed()
  }, [token])

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.brand}>
          <h2>Home</h2>
        </div>
        <div className={classes.title}>
          <h2>Tweets</h2>
        </div>

        {feed?.map((data, index) => (
          <Feeds data={data} key={data._id} />
        ))}
      </div>
    </div>
  )
}

export default Feed
