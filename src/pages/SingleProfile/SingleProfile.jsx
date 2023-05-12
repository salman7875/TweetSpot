/* eslint-disable no-unused-vars */
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import LoopIcon from '@mui/icons-material/Loop'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import { Link } from 'react-router-dom'
import classes from '../../components/Profile/profile.module.css'

const SingleProfile = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.nav}>
          <KeyboardBackspaceIcon
            fontSize='large'
            className={classes.iconBack}
          />
          <div>
            <h2>currentUser.name</h2>
            <p>currentUser.tweets.length Tweets</p>
          </div>
        </div>
        <div className={classes.userBg}>
          <img src='currentUser.bgImg' alt='bg-img' className={classes.bgImg} />
          <img
            src='currentUser.avatar'
            alt='avatar'
            className={classes.avatar}
          />
        </div>
        <div className={classes.user}>
          <a href='#' className={classes.editProfile}>
            Follow
          </a>
          <div className={classes.userInfo}>
            <h3>currentUser.name</h3>
            <p>@currentUser.username</p>

            <div className={classes.date}>
              <CalendarMonthIcon fontSize='medium' color='#555' />
              <span>Joined September 2022</span>
            </div>

            <p className={classes.bio}>currentUser.bio</p>

            <div className={classes.followings}>
              <Link to='/followings'>
                currentUser.followings.length
                <span>Followings</span>
              </Link>
              <Link to='/followers'>
                currentUser.followers.length
                <span>Followers</span>
              </Link>
            </div>
          </div>
        </div>

        <div className={classes.userTweet}>
          <div className={classes.head}>
            <h2>Tweet</h2>
          </div>

          <div className={classes.tweetCard}>
            <div className={classes.cardInfo}>
              <img src='currentUser.avatar' />
              <p>currentUser.name</p>
            </div>
            <div className={classes.tweet}>
              <p>tweet.content</p>
            </div>
            <div className={classes.action}>
              <div className={classes.like}>
                <FavoriteBorderIcon />
                <span>tweet.likes.length</span>
              </div>
              <div className={classes.comment}>
                <ChatBubbleOutlineIcon />
                <span>tweet.comments.length</span>
              </div>
              <div className={classes.share}>
                <LoopIcon />
                <span>1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProfile
