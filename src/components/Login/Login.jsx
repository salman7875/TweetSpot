/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { Form, json, redirect, useLoaderData } from 'react-router-dom'
import classes from './login.module.css'

const Login = () => {
  const user = useLoaderData()

  const loginHandler = () => {
    console.log(user)
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
            />
          </div>
          <div className={classes.control}>
            <label>Password: </label>
            <input type='password' name='password' placeholder='******' />
          </div>
          <div className={classes.action}>
            <button className={classes.register}>Register?</button>
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

export const loginUser = async ({ request, params }) => {
  const formdata = await request.formData()

  const authData = {
    username: formdata.get('username'),
    password: formdata.get('password')
  }

  const res = await fetch('http://localhost:5000/api/login', {
    method: 'POST',
    body: JSON.stringify(authData),
    headers: { 'Content-Type': 'application/json' }
  })

  if (!res.ok) {
    throw json({ message: 'Something Went Wrong!' }, { status: 500 })
  }

  const data = await res.json()
  console.log(data)
  const token = data.token
  localStorage.setItem('token', token)

  return redirect('/')
}
