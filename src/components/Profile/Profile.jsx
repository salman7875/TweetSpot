/* eslint-disable no-unused-vars */
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import LoopIcon from '@mui/icons-material/Loop'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import classes from './profile.module.css'

const Profile = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.nav}>
          <KeyboardBackspaceIcon
            fontSize='large'
            className={classes.iconBack}
          />
          <div>
            <h2>Salman Ansari</h2>
            <p>2 Tweets</p>
          </div>
        </div>
        <div className={classes.userBg}>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjjc-6t5WZ4zkJ0N7v1If97u7sZ098VwbWWnAFTyKCAg&s'
            alt='bg-img'
            className={classes.bgImg}
          />
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjjc-6t5WZ4zkJ0N7v1If97u7sZ098VwbWWnAFTyKCAg&s'
            alt='avatar'
            className={classes.avatar}
          />
        </div>
        <div className={classes.user}>
          <a href='#' className={classes.editProfile}>
            Edit Profile
          </a>
          <div className={classes.userInfo}>
            <h3>Salman Ansari</h3>
            <p>@Salman__76</p>

            <div className={classes.date}>
              <CalendarMonthIcon fontSize='medium' color='#555' />
              <span>Joined September 2022</span>
            </div>

            <p className={classes.bio}>
              A Software Engineer from Mumbai💼. Planning to do Masters in
              Canada 🎯
            </p>

            <div className={classes.followings}>
              <a href='#'>
                0 <span>Followings</span>
              </a>
              <a href='#'>
                25 <span>Followers</span>
              </a>
            </div>
          </div>
        </div>

        <div className={classes.userTweet}>
          <div className={classes.head}>
            <h2>Tweet</h2>
          </div>
          <div className={classes.tweetCard}>
            <div className={classes.cardInfo}>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjjc-6t5WZ4zkJ0N7v1If97u7sZ098VwbWWnAFTyKCAg&s'
                alt='username'
              />
              <p>Salman Ansari</p>
            </div>
            <div className={classes.tweet}>
              <p>
                A Software Engineer from Mumbai💼. Planning to do Masters in
                Canada 🎯A Software Engineer from Mumbai💼. Planning to do
                Masters in Canada 🎯
              </p>
            </div>
            <div className={classes.action}>
              <div className={classes.like}>
                <FavoriteBorderIcon />
                <span>2</span>
              </div>
              <div className={classes.comment}>
                <ChatBubbleOutlineIcon />
                <span>31</span>
              </div>
              <div className={classes.share}>
                <LoopIcon />
                <span>6</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
