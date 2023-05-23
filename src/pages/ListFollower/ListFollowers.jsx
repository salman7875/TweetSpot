/* eslint-disable no-unused-vars */
import { Link, json, useLocation, useSearchParams } from 'react-router-dom'
import classes from './ListFollowers.module.css'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../../utils/request'

const ListFollowers = () => {
  const [users, setUsers] = useState()
  const location = useLocation()
  const id = location.pathname.split('/')[1]
  const mode = location.pathname.split('/')[2]

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(BASE_URL + `/api/users/${id}/${mode}`)
      const data = await res.json()
      setUsers(data.users)
    }
    fetchUsers()
  }, [id, mode])

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <ul className={classes.lists}>
          {users?.map(user => (
            <li className={classes.listItem} key={user._id.toString()}>
              <div className={classes.listItem}>
                <div className={classes.imgContainer}>
                  <img src={user.avatar} alt={user.name} />
                  <div>
                    <p className={classes.bgName}>{user.name}</p>
                    <p>@{user.username}</p>
                  </div>
                </div>
                <Link to={`/users/${user._id}`} className={classes.btnFollow}>
                  Follow
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ListFollowers
