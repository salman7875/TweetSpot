/* eslint-disable no-unused-vars */
import classes from './login.module.css'

const Login = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Login Page</h2>
        <form className={classes.form}>
          <div className={classes.control}>
            <label>Username: </label>
            <input type='text' placeholder='Enter your username...' />
          </div>
          <div className={classes.control}>
            <label>Password: </label>
            <input type='password' placeholder='***' />
          </div>
          <div className={classes.action}>
            <button className={classes.register}>Register?</button>
            <button className={classes.login}>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
