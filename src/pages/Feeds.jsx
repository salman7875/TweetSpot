/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react'
import { FavoriteBorder, Loop, ChatBubbleOutline } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import Comments from '../components/Comments/Comments'
import classes from '../components/Feed/feed.module.css'
import { AuthContext } from '../context/authContext'

const Feeds = ({ data }) => {
  const [openComment, setOpenComment] = useState(-1)
  const { like } = useContext(AuthContext)

  const likeHandler = async id => {
    await like(id)
  }

  return (
    <div className={classes.card} key={data._id}>
      <div className={classes.cardInfo}>
        <img src={data.author.avatar || ''} alt={data.author.username} />
        <Link to={`/users/${data.author._id}`}>{data.author.username}</Link>
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
          <ChatBubbleOutline onClick={() => setOpenComment(data._id)} />
          <span onClick={() => setOpenComment(-1)}>
            {data?.comments.length}
          </span>
        </div>
        <div className={classes.share}>
          <Loop />
          <span>6</span>
        </div>
      </div>
      <div className={data._id === data._id ? 'active' : 'inactive'}>
        {data._id === openComment && <Comments />}
      </div>
    </div>
  )
}

export default Feeds
