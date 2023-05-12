/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { Form, useLoaderData, useNavigate } from 'react-router-dom'
import classes from './login.module.css'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/authContext'

const Login = () => {
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({ username: '', password: '' })
  const { auth } = useContext(AuthContext)

  const jumpToRegister = () => {
    navigate('/register')
  }

  const loginHandler = async e => {
    e.preventDefault()
    await auth('login', inputs)
    navigate('/')
  }

  const changeHandler = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Login Page</h2>
        <Form method='post' className={classes.form}>
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
            <label>Password: </label>
            <input
              type='password'
              name='password'
              placeholder='******'
              onChange={changeHandler}
            />
          </div>
          <div className={classes.action}>
            <button className={classes.register} onClick={jumpToRegister}>
              Register?
            </button>
            <button className={classes.login} onClick={loginHandler}>
              Login
            </button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login
