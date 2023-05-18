/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react'
import classes from './comments.module.css'
import { AuthContext } from '../../context/authContext'

const Comments = ({ id }) => {
  const [comment, setComment] = useState('')
  const [user, setUser] = useState([])
  // const { token, currentUser } = useContext(AuthContext)
  const token = localStorage.getItem('token')

  useEffect(() => {
    const fetchComments = async id => {
      const res = await fetch('http://localhost:5000/api/tweets/comments/' + id)
      const data = await res.json()
      setUser(data.userComment.comments)
    }
    fetchComments(id)
  }, [id, comment])

  const addCommentHandler = async id => {
    const res = await fetch('http://localhost:5000/api/tweets/' + id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      },
      body: JSON.stringify({ comment })
    })

    if (!res.ok) {
      console.log('Something went wrong!')
    } else {
      console.log('Done!')
      setComment('')
    }
  }

  return (
    <div className={classes.container}>
      {user?.map(user => (
        <div className={classes.comments} key={user.user._id}>
          <img src={user.user.avatar} alt='avatar img' />
          <div className={classes.info}>
            <span>{user.user.name}</span>
            <p>{user.comment}</p>
          </div>
          <span className={classes.date}>user.createdAt</span>
        </div>
      ))}
      <div className={classes.input}>
        <input
          type='text'
          placeholder='Add your comment...'
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
        <button onClick={() => addCommentHandler(id)}>Send</button>
      </div>
    </div>
  )
}

export default Comments
