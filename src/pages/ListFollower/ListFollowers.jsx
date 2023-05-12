/* eslint-disable no-unused-vars */
import { Link, json, useSearchParams } from 'react-router-dom'
import classes from './ListFollowers.module.css'
import { useEffect, useState } from 'react'

const ListFollowers = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <ul className={classes.lists}>
          <li className={classes.listItem}>
            <div className={classes.listItem}>
              <div className={classes.imgContainer}>
                <img src='list.avatar' alt='list.name' />
                <div>
                  <p className={classes.bgName}>list.name</p>
                  <p>@list.username</p>
                </div>
              </div>
              <Link to={`/users/`} className={classes.btnFollow}>
                Follow
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ListFollowers
