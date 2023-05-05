/* eslint-disable no-unused-vars */
import classes from './tweetForm.module.css'

const TweetForm = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <form className={classes.form}>
          <textarea rows={10} placeholder="What's happening?" />
          <button>Tweet</button>
        </form>
      </div>
    </div>
  )
}

export default TweetForm
