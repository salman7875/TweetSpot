/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom'
import classes from './tweetForm.module.css'

const TweetForm = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate('/')
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <form className={classes.form}>
          <textarea rows={10} placeholder="What's happening?" />
          <button>Tweet</button>
          <button onClick={goBack} type='button'>
            Back
          </button>
        </form>
      </div>
    </div>
  )
}

export default TweetForm
