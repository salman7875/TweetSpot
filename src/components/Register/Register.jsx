/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { Form, redirect, useActionData } from 'react-router-dom'
import classes from './register.module.css'

const Register = () => {
  const actionData = useActionData()

  const submitHandler = () => {
    console.log(actionData)
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Register Page</h2>
        <Form method='POST' className={classes.form}>
          <div className={classes.control}>
            <label>Name: </label>
            <input
              type='text'
              name='name'
              placeholder='Enter your Full Name...'
            />
          </div>
          <div className={classes.control}>
            <label>Username: </label>
            <input
              type='text'
              name='username'
              placeholder='Enter your username...'
            />
          </div>
          <div className={classes.control}>
            <label>Avatar: </label>
            <input type='text' name='avatar' placeholder='Enter your URL...' />
          </div>
          <div className={classes.control}>
            <label>background Image: </label>
            <input type='text' name='bgImg' placeholder='Enter your URL...' />
          </div>
          <div className={classes.control}>
            <label>Bio: </label>
            <input type='text' name='bio' placeholder='Enter your bio...' />
          </div>
          <div className={classes.control}>
            <label>Email: </label>
            <input type='text' name='email' placeholder='Enter your Email...' />
          </div>
          <div className={classes.control}>
            <label>Password: </label>
            <input type='password' name='password' placeholder='***' />
          </div>
          <div className={classes.action}>
            <button className={classes.login}>Login?</button>
            <button
              className={classes.register}
              onClick={submitHandler}
              type='submit'
            >
              Register
            </button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Register

export const registerUserAction = async ({ request, params }) => {
  const formdata = await request.formData()

  const authData = {
    name: formdata.get('name'),
    username: formdata.get('username'),
    bgImg: formdata.get('bgImg'),
    avatar: formdata.get('avatar'),
    bio: formdata.get('bio'),
    email: formdata.get('email'),
    password: formdata.get('password')
  }

  const res = await fetch('http://localhost:5000/api/register', {
    method: 'POST',
    body: JSON.stringify(authData),
    headers: { 'Content-Type': 'application/json' }
  })

  if (!res.ok) {
    return res
  }

  // SAVING TOKEN TO LOCAL STORAGE
  const data = await res.json()
  const token = data.token
  localStorage.setItem('token', token)

  return redirect('/')
}
