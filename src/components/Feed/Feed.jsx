/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import classes from './feed.module.css'
import { FavoriteBorder, Loop, ChatBubbleOutline } from '@mui/icons-material'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/authContext'
import Comments from '../Comments/Comments'
import { Link } from 'react-router-dom'

const Feed = () => {
  const [openComment, setOpenComment] = useState(false)
  const [feed, setFeed] = useState()
  const { token, like } = useContext(AuthContext)

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

  const likeHandler = async id => {
    await like(id)
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.brand}>
          <h2>Home</h2>
        </div>
        <div className={classes.title}>
          <h2>Tweets</h2>
        </div>

        {feed?.map(data => (
          <div className={classes.card} key={data._id}>
            <div className={classes.cardInfo}>
              <img src={data.author.avatar || ''} alt={data.author.username} />
              <Link to={`/users/${data.author._id}`}>
                {data.author.username}
              </Link>
            </div>
            <div className={classes.tweet}>
              <p>{data.content}</p>
            </div>
            <div className={classes.action}>
              <div className={classes.like}>
                <FavoriteBorder onClick={() => likeHandler(data._id)} />
                <span>{data.likes?.length}</span>
              </div>
              <div className={classes.comment}>
                <ChatBubbleOutline
                  onClick={() => setOpenComment(!openComment)}
                />
                <span>{data?.comments.length}</span>
              </div>
              <div className={classes.share}>
                <Loop />
                <span>6</span>
              </div>
            </div>
            {openComment && <Comments />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Feed
