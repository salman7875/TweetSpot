/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'
import classes from './suggestion.module.css'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/authContext'

const Suggestion = () => {
  const [suggested, setSuggested] = useState()
  const { token } = useContext(AuthContext)

  useEffect(() => {
    const fetchSuggestUser = async () => {
      const res = await fetch('http://localhost:5000/api/users', {
        headers: { Authorization: 'Bearer ' + token }
      })
      const data = await res.json()
      setSuggested(data.users)
    }
    fetchSuggestUser()
  }, [token])

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Suggestions</h2>
        <ul className={classes.lists}>
          {suggested?.map(user => (
            <li className={classes.list} key={user._id}>
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

export default Suggestion
