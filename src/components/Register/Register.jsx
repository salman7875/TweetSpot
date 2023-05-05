/* eslint-disable no-unused-vars */
import classes from './register.module.css'

const Register = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Register Page</h2>
        <form className={classes.form}>
          <div className={classes.control}>
            <label>Name: </label>
            <input type='text' placeholder='Enter your Full Name...' />
          </div>
          <div className={classes.control}>
            <label>Username: </label>
            <input type='text' placeholder='Enter your username...' />
          </div>
          <div className={classes.control}>
            <label>Avatar: </label>
            <input type='text' placeholder='Enter your URL...' />
          </div>
          <div className={classes.control}>
            <label>Bio: </label>
            <input type='text' placeholder='Enter your bio...' />
          </div>
          <div className={classes.control}>
            <label>Email: </label>
            <input type='text' placeholder='Enter your Email...' />
          </div>
          <div className={classes.control}>
            <label>Username: </label>
            <input type='text' placeholder='Enter your username...' />
          </div>
          <div className={classes.control}>
            <label>Password: </label>
            <input type='password' placeholder='***' />
          </div>
          <div className={classes.action}>
            <button className={classes.login}>Login?</button>
            <button className={classes.register}>Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
