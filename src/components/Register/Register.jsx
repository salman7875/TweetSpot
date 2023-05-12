/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom'
import classes from './register.module.css'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/authContext'

const Register = () => {
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    name: '',
    username: '',
    avatar: '',
    bgImg: '',
    bio: '',
    email: '',
    password: ''
  })
  const { auth } = useContext(AuthContext)

  const jumpToLogin = () => {
    navigate('/login')
  }

  const changeHandler = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const registerHandler = async e => {
    e.preventDefault()
    await auth('register', inputs)
    navigate('/')
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Register Page</h2>
        <form className={classes.form}>
          <div className={classes.control}>
            <label>Name: </label>
            <input
              type='text'
              name='name'
              placeholder='Enter your Full Name...'
              onChange={changeHandler}
            />
          </div>
          <div className={classes.control}>
            <label>Username: </label>
            <input
              type='text'
              name='username'
              placeholder='Enter your username...'
              onChange={changeHandler}
            />
          </div>
          <div className={classes.control}>
            <label>Avatar: </label>
            <input
              type='text'
              name='avatar'
              placeholder='Enter your URL...'
              onChange={changeHandler}
            />
          </div>
          <div className={classes.control}>
            <label>background Image: </label>
            <input
              type='text'
              name='bgImg'
              placeholder='Enter your URL...'
              onChange={changeHandler}
            />
          </div>
          <div className={classes.control}>
            <label>Bio: </label>
            <input
              type='text'
              name='bio'
              placeholder='Enter your bio...'
              onChange={changeHandler}
            />
          </div>
          <div className={classes.control}>
            <label>Email: </label>
            <input
              type='text'
              name='email'
              placeholder='Enter your Email...'
              onChange={changeHandler}
            />
          </div>
          <div className={classes.control}>
            <label>Password: </label>
            <input
              type='password'
              name='password'
              placeholder='***'
              onChange={changeHandler}
            />
          </div>
          <div className={classes.action}>
            <button className={classes.login} onClick={jumpToLogin}>
              Login?
            </button>
            <button
              className={classes.register}
              type='submit'
              onClick={registerHandler}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
