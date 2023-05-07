/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import classes from './feed.module.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import LoopIcon from '@mui/icons-material/Loop'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import { json, useLoaderData } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getAuthToken } from '../../utils/auth'

const Feed = () => {
  const [tweets, setTweets] = useState()
  const data = useLoaderData()

  useEffect(() => {
    setTweets(data.tweets)
  }, [data.tweets])

  console.log(tweets)

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.brand}>
          <h2>Home</h2>
        </div>
        <div className={classes.title}>
          <h2>Tweets</h2>
        </div>

        {tweets?.map(data => (
          <div className={classes.card} key={data._id}>
            <div className={classes.cardInfo}>
              <img src={data.avatar} alt={data.username} />
              <p>{data.username}</p>
            </div>
            <div className={classes.tweet}>
              <p>{data.content}</p>
            </div>
            <div className={classes.action}>
              <div className={classes.like}>
                <FavoriteBorderIcon />
                <span>{data?.likes.length}</span>
              </div>
              <div className={classes.comment}>
                <ChatBubbleOutlineIcon />
                <span>{data?.comments.length}</span>
              </div>
              <div className={classes.share}>
                <LoopIcon />
                <span>6</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Feed

export const getSuggestedUser = async ({ request, params }) => {
  const token = getAuthToken()
  const res = await fetch('http://localhost:5000/api/users/', {
    headers: { Authorization: 'Bearer ' + token }
  })
  if (!res.ok) {
    throw json('Something went wrong!')
  }

  return res
}

export const getUserTweets = async ({ request, params }) => {
  const res = await fetch('http://localhost:5000/api/tweets/')

  if (!res.ok) {
    throw json({ message: 'No Tweets Found!' }, { status: 500 })
  }

  return res
}
