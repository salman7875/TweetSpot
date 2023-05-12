/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import classes from './feed.module.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import LoopIcon from '@mui/icons-material/Loop'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'

const Feed = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.brand}>
          <h2>Home</h2>
        </div>
        <div className={classes.title}>
          <h2>Tweets</h2>
        </div>

        <div className={classes.card}>
          <div className={classes.cardInfo}>
            <img src='data.avatar' alt='data.username' />
            <p>data.username</p>
          </div>
          <div className={classes.tweet}>
            <p>data.content</p>
          </div>
          <div className={classes.action}>
            <div className={classes.like}>
              <FavoriteBorderIcon />
              <span>data.likes?.length</span>
            </div>
            <div className={classes.comment}>
              <ChatBubbleOutlineIcon />
              <span>data?.comments.length</span>
            </div>
            <div className={classes.share}>
              <LoopIcon />
              <span>6</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feed
