/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { Form, Link } from 'react-router-dom'
import { useState } from 'react'
import classes from './search.module.css'

const Search = () => {
  const [input, setInput] = useState('')
  const [user, setUser] = useState()

  const searchUser = async e => {
    e.preventDefault()
    const res = await fetch('http://localhost:5000/api/find', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: input })
    })
    const data = await res.json()
    setUser(data.user[0])
    setInput('')
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Form className={classes.search} onSubmit={searchUser}>
          <input
            type='text'
            value={input}
            placeholder='Search...'
            onChange={e => setInput(e.target.value)}
          />
        </Form>

        {user && (
          <div className={classes.result}>
            <div className={classes.imgContainer}>
              <img src={user.avatar} />
              <div>
                <p className={classes.bgName}>{user.name}</p>
                <p>@{user.username}</p>
              </div>
            </div>
            <Link to={`/users/${user._id}`} className={classes.btnFollow}>
              Follow
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Search
