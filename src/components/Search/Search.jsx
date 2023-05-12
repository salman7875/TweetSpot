/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { Form, Link, useActionData } from 'react-router-dom'
import classes from './search.module.css'
import { useState } from 'react'

const Search = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Form method='post' action='/search' className={classes.search}>
          <input type='text' name='name' placeholder='Search...' />
        </Form>

        <div className={classes.result}>
          <div className={classes.imgContainer}>
            <img src='user.avatar' />
            <div>
              <p className={classes.bgName}>user.name</p>
              <p>@user.username</p>
            </div>
          </div>
          <Link to={`/users/`} className={classes.btnFollow}>
            Follow
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Search
