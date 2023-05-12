/* eslint-disable no-unused-vars */
import TwitterIcon from '@mui/icons-material/Twitter'
import HomeIcon from '@mui/icons-material/Home'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import CreateIcon from '@mui/icons-material/Create'
import SearchIcon from '@mui/icons-material/Search'
import LogoutIcon from '@mui/icons-material/Logout'

import { NavLink } from 'react-router-dom'
import classes from './sidebar.module.css'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'

const Sidebar = () => {
  const { currentUser } = useContext(AuthContext)

  return (
    <div className={classes.container}>
      <nav className={classes.sidebar}>
        <ul className={classes.lists}>
          {!currentUser && (
            <>
              <li className={classes.list}>
                <NavLink to='/register'>
                  <TwitterIcon fontSize='large' />
                  <span>Register</span>
                </NavLink>
              </li>
              <li className={classes.list}>
                <NavLink to='/login'>
                  <TwitterIcon fontSize='large' />
                  <span>Login</span>
                </NavLink>
              </li>
            </>
          )}
          <li className={classes.list}>
            <NavLink to='/'>
              <TwitterIcon fontSize='large' />
              <span>Twitter</span>
            </NavLink>
          </li>
          <li className={classes.list}>
            <NavLink to='/'>
              <HomeIcon fontSize='large' />
              <span>Home</span>
            </NavLink>
          </li>
          <li className={classes.list}>
            <NavLink to='/search'>
              <SearchIcon fontSize='large' />
              <span>Search</span>
            </NavLink>
          </li>
          <li className={classes.list}>
            <NavLink to='#'>
              <NotificationsNoneIcon fontSize='large' />
              <span>Notification</span>
            </NavLink>
          </li>
          <li className={classes.list}>
            <NavLink to='#'>
              <MailOutlineIcon fontSize='large' />
              <span>Message</span>
            </NavLink>
          </li>
          <li className={classes.list}>
            <NavLink to='/create-tweet'>
              <CreateIcon fontSize='large' />
              <span>Tweet</span>
            </NavLink>
          </li>
          <li className={classes.list}>
            <NavLink to='/profile'>
              <AccountCircleIcon fontSize='large' />
              <span>Profile</span>
            </NavLink>
          </li>
          <li className={classes.list}>
            <NavLink href='/login'>
              <LogoutIcon fontSize='large' />
              <span>Logout</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
