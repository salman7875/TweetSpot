/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { Form, Link, json, useActionData } from 'react-router-dom'
import classes from './search.module.css'
import { useState } from 'react'

const Search = () => {
  const [user, setUser] = useState()
  const data = useActionData()

  const searchHandler = () => {
    setUser(data?.user[0])
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Form
          method='post'
          action='/search'
          className={classes.search}
          onSubmit={searchHandler}
        >
          <input type='text' name='name' placeholder='Search...' />
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

export const searchUser = async ({ request, params }) => {
  const formdata = await request.formData()

  const userData = {
    username: formdata.get('name')
  }

  const res = await fetch('http://localhost:5000/api/find', {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: { 'Content-Type': 'application/json' }
  })

  return res
}
