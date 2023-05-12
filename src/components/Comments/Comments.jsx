/* eslint-disable no-unused-vars */
import classes from './comments.module.css'

const Comments = () => {
  return (
    <div className={classes.container}>
      <div className={classes.comments}>
        <img
          src='https://avatars.githubusercontent.com/u/78205495?v=4'
          alt=''
        />
        <div className={classes.info}>
          <span>Salman Ansari</span>
          <p>Awesome Content, Sir please upload the second Part</p>
        </div>
        <span className={classes.date}>1 hour ago</span>
      </div>
      <div className={classes.comments}>
        <img
          src='https://avatars.githubusercontent.com/u/78205495?v=4'
          alt=''
        />
        <div className={classes.info}>
          <span>Salman Ansari</span>
          <p>Awesome Content, Sir please upload the second Part</p>
        </div>
        <span className={classes.date}>1 hour ago</span>
      </div>
    </div>
  )
}

export default Comments
