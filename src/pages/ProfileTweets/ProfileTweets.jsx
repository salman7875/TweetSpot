/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FavoriteBorder, Loop, ChatBubbleOutline } from '@mui/icons-material'
import classes from '../../components/Profile/profile.module.css'
import { useState } from 'react'
import Comments from '../../components/Comments/Comments'

const ProfileTweets = ({ id, avatar, name, tweet }) => {
  const [openComment, setOpenComment] = useState(-1)

  return (
    <div className={classes.tweetCard} key={tweet._id}>
      <div className={classes.cardInfo}>
        <img src={avatar} />
        <p>{name}</p>
      </div>
      <div className={classes.tweet}>
        <p>{tweet.content}</p>
      </div>
      <div className={classes.action}>
        <div className={classes.like}>
          <FavoriteBorder />
          <span>{tweet.likes.length}</span>
        </div>
        <div className={classes.comment}>
          <ChatBubbleOutline onClick={() => setOpenComment(tweet._id)} />
          <span onClick={() => setOpenComment(-1)}>
            {tweet.comments.length}
          </span>
        </div>
        <div className={classes.share}>
          <Loop />
          <span>1</span>
        </div>
      </div>
      {tweet._id === openComment && <Comments id={id} />}
    </div>
  )
}

export default ProfileTweets
