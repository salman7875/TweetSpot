/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { useNavigate, Form, redirect, useActionData } from 'react-router-dom'
import classes from './tweetForm.module.css'
import { getAuthToken } from '../../utils/auth'

const TweetForm = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate('/')
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Form method='post' className={classes.form}>
          <textarea rows={10} name='tweet' placeholder="What's happening?" />
          <button type='submit'>Tweet</button>
          <button onClick={goBack} type='button'>
            Back
          </button>
        </Form>
      </div>
    </div>
  )
}

export default TweetForm
