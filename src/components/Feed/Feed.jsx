/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import classes from './feed.module.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import LoopIcon from '@mui/icons-material/Loop'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import Comments from '../Comments/Comments'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/authContext'

const Feed = () => {
  const [openComment, setOpenComment] = useState(false)
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

  const likeHandler = async id => {
    const res = await fetch('http://localhost:5000/api/tweets/action/' + id, {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + token }
    })

    if (res.ok) {
      console.log('Liked')
    } else {
      console.log('Something went wrong!')
    }
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
              <img src={data.avatar || ''} alt={data.username} />
              <p>{data.username}</p>
            </div>
            <div className={classes.tweet}>
              <p>{data.content}</p>
            </div>
            <div className={classes.action}>
              <div className={classes.like}>
                <FavoriteBorderIcon onClick={() => likeHandler(data._id)} />
                <span>{data.likes?.length}</span>
              </div>
              <div className={classes.comment}>
                <ChatBubbleOutlineIcon
                  onClick={() => setOpenComment(!openComment)}
                />
                <span>{data?.comments.length}</span>
              </div>
              <div className={classes.share}>
                <LoopIcon />
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
