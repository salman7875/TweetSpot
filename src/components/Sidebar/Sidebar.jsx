/* eslint-disable no-unused-vars */
import TwitterIcon from '@mui/icons-material/Twitter'
import HomeIcon from '@mui/icons-material/Home'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import CreateIcon from '@mui/icons-material/Create'
import SearchIcon from '@mui/icons-material/Search'

import classes from './sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={classes.container}>
      <nav className={classes.sidebar}>
        <ul className={classes.lists}>
          <li className={classes.list}>
            <a href='#'>
              <TwitterIcon fontSize='large' />
              <span>Twitter</span>
            </a>
          </li>
          <li className={classes.list}>
            <a href='#'>
              <HomeIcon fontSize='large' />
              <span>Home</span>
            </a>
          </li>
          <li className={classes.list}>
            <a href='#'>
              <SearchIcon fontSize='large' />
              <span>Search</span>
            </a>
          </li>
          <li className={classes.list}>
            <a href='#'>
              <NotificationsNoneIcon fontSize='large' />
              <span>Notification</span>
            </a>
          </li>
          <li className={classes.list}>
            <a href='#'>
              <MailOutlineIcon fontSize='large' />
              <span>Message</span>
            </a>
          </li>
          <li className={classes.list}>
            <a href='#'>
              <CreateIcon fontSize='large' />
              <span>Create</span>
            </a>
          </li>
          <li className={classes.list}>
            <a href='#'>
              <AccountCircleIcon fontSize='large' />
              <span>Profile</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
