/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import {
  useNavigate,
  Form,
  json,
  redirect,
  useActionData
} from 'react-router-dom'
import classes from './tweetForm.module.css'
import { getAuthToken } from '../../utils/auth'

const TweetForm = () => {
  const navigate = useNavigate()
  const data = useActionData()

  const createTweetHandler = () => {
    console.log(data)
  }

  const goBack = () => {
    navigate('/')
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Form
          method='post'
          className={classes.form}
          onSubmit={createTweetHandler}
        >
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

export const createTweet = async ({ request, params }) => {
  const formdata = await request.formData()

  const data = {
    content: formdata.get('tweet')
  }

  const token = getAuthToken()

  const res = await fetch('http://localhost:5000/api/tweets/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    },
    body: JSON.stringify(data)
  })

  if (!res.ok) {
    throw json({ message: 'Something Went Wrong!' }, { status: 500 })
  }

  return redirect('/')
}
