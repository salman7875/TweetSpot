/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { useNavigate, Form, redirect, useActionData } from 'react-router-dom'
import classes from './tweetForm.module.css'
import { getAuthToken } from '../../utils/auth'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/authContext'

const TweetForm = () => {
  const navigate = useNavigate()
  const [input, setInput] = useState('')
  const { token } = useContext(AuthContext)

  const goBack = () => {
    navigate('/')
  }

  const tweetHandler = async e => {
    e.preventDefault()

    const res = await fetch('http://localhost:5000/api/tweets/create', {
      method: 'POST',
      body: JSON.stringify({ content: input }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    })
    navigate('/')
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <form className={classes.form}>
          <textarea
            rows={10}
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="What's happening?"
          />
          <button onClick={tweetHandler}>Tweet</button>
          <button onClick={goBack} type='button'>
            Back
          </button>
        </form>
      </div>
    </div>
  )
}

export default TweetForm
