/* eslint-disable no-unused-vars */
import {
  Home,
  AccountCircle,
  Create,
  Search,
  Logout
} from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import classes from './navbar.module.css'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/authContext'

const Navbar = () => {
  const { logout } = useContext(AuthContext)
  const [isActive, setIsActive] = useState('/')
  const navigate = useNavigate()
  const logoutHandler = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className={classes.container}>
      <ul className={classes.lists}>
        <li className={`${classes.list} ${isActive === '/' && classes.active}`}>
          <Link to='/' onClick={() => setIsActive('/')}>
            <Home className={classes.icon} fontSize='large' />
          </Link>
        </li>
        <li
          className={`${classes.list} ${
            isActive === '/search' && classes.active
          }`}
          onClick={() => setIsActive('/search')}
        >
          <Link to='/search' onClick={() => setIsActive('/search')}>
            <Search className={classes.icon} fontSize='large' />
          </Link>
        </li>
        <li
          className={`${classes.list} ${
            isActive === '/create-tweet' && classes.active
          }`}
          onClick={() => setIsActive('/create-tweet')}
        >
          <Link to='/create-tweet' onClick={() => setIsActive('/create-tweet')}>
            <Create className={classes.icon} fontSize='large' />
          </Link>
        </li>
        <li
          className={`${classes.list} ${
            isActive === '/profile' && classes.active
          }`}
        >
          <Link to='/profile' onClick={() => setIsActive('/profile')}>
            <AccountCircle className={classes.icon} fontSize='large' />
          </Link>
        </li>
        <li className={classes.list} onClick={logoutHandler}>
          <Link to='/login'>
            <Logout className={classes.icon} fontSize='large' />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
