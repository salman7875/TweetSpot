/* eslint-disable no-unused-vars */
import TwitterIcon from '@mui/icons-material/Twitter'
import HomeIcon from '@mui/icons-material/Home'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import CreateIcon from '@mui/icons-material/Create'
import SearchIcon from '@mui/icons-material/Search'
import LogoutIcon from '@mui/icons-material/Logout'

import { NavLink, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/authContext'
import classes from './sidebar.module.css'

const Sidebar = () => {
  const { token, logout } = useContext(AuthContext)
  const [isActive, setIsActive] = useState('/')
  const navigate = useNavigate()

  const logoutHandler = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className={classes.container}>
      <nav className={classes.sidebar}>
        <ul className={classes.lists}>
          <li
            className={`${classes.list} ${isActive === '/' && classes.active}`}
          >
            <NavLink to='/' onClick={() => setIsActive('/')}>
              <HomeIcon fontSize='large' />
              <span>Home</span>
            </NavLink>
          </li>
          <li
            className={`${classes.list} ${
              isActive === '/search' && classes.active
            }`}
          >
            <NavLink to='/search' onClick={() => setIsActive('/search')}>
              <SearchIcon fontSize='large' />
              <span>Search</span>
            </NavLink>
          </li>
          <li
            className={`${classes.list} ${
              isActive === '/soon' && classes.active
            }`}
          >
            <NavLink to='#'>
              <NotificationsNoneIcon fontSize='large' />
              <span>Notification</span>
            </NavLink>
          </li>
          <li
            className={`${classes.list} ${
              isActive === '/soon' && classes.active
            }`}
          >
            <NavLink to='#'>
              <MailOutlineIcon fontSize='large' />
              <span>Message</span>
            </NavLink>
          </li>
          <li
            className={`${classes.list} ${
              isActive === '/create-tweet' && classes.active
            }`}
          >
            <NavLink
              to='/create-tweet'
              onClick={() => setIsActive('/create-tweet')}
            >
              <CreateIcon fontSize='large' />
              <span>Tweet</span>
            </NavLink>
          </li>
          <li
            className={`${classes.list} ${
              isActive === '/profile' && classes.active
            }`}
          >
            <NavLink to='/profile' onClick={() => setIsActive('/profile')}>
              <AccountCircleIcon fontSize='large' />
              <span>Profile</span>
            </NavLink>
          </li>
          {token && (
            <li className={classes.list} onClick={logoutHandler}>
              <NavLink href='/login'>
                <LogoutIcon fontSize='large' />
                <span>Logout</span>
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
