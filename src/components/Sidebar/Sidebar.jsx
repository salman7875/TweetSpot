/* eslint-disable no-unused-vars */
import {
  Home,
  NotificationsNone,
  MailOutline,
  AccountCircle,
  Create,
  Search,
  Logout
} from '@mui/icons-material'

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
              <Home fontSize='large' />
              <span>Home</span>
            </NavLink>
          </li>
          <li
            className={`${classes.list} ${
              isActive === '/search' && classes.active
            }`}
          >
            <NavLink to='/search' onClick={() => setIsActive('/search')}>
              <Search fontSize='large' />
              <span>Search</span>
            </NavLink>
          </li>
          <li
            className={`${classes.list} ${
              isActive === '/soon' && classes.active
            }`}
          >
            <NavLink to='#'>
              <NotificationsNone fontSize='large' />
              <span>Notification</span>
            </NavLink>
          </li>
          <li
            className={`${classes.list} ${
              isActive === '/soon' && classes.active
            }`}
          >
            <NavLink to='#'>
              <MailOutline fontSize='large' />
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
              <Create fontSize='large' />
              <span>Tweet</span>
            </NavLink>
          </li>
          <li
            className={`${classes.list} ${
              isActive === '/profile' && classes.active
            }`}
          >
            <NavLink to='/profile' onClick={() => setIsActive('/profile')}>
              <AccountCircle fontSize='large' />
              <span>Profile</span>
            </NavLink>
          </li>
          {token && (
            <li className={classes.list} onClick={logoutHandler}>
              <NavLink href='/login'>
                <Logout fontSize='large' />
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
