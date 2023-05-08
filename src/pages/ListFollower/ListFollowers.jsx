/* eslint-disable no-unused-vars */
import { Link, json, useSearchParams } from 'react-router-dom'
import classes from './ListFollowers.module.css'
import { useEffect, useState } from 'react'

const ListFollowers = () => {
  const [lists, setLists] = useState()
  const search = window.location.href
  const param = search.split('/')[3]

  useEffect(() => {
    const fetchList = async (id, param) => {
      const res = await fetch(`http://localhost:5000/api/user/${id}/${param}`)
      if (!res.ok) {
        throw json({ message: 'Something went wrong!' }, { status: 500 })
      }

      const data = await res.json()
      setLists(param === 'followers' ? data.userFollowers : data.userFollowings)
    }
    fetchList('644cb435d5a30b22ae668c70', param)
  }, [param])

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <ul className={classes.lists}>
          {lists?.map(list => (
            <li className={classes.listItem} key={list._id}>
              <div className={classes.listItem}>
                <div className={classes.imgContainer}>
                  <img src={list.avatar} alt={list.name} />
                  <div>
                    <p className={classes.bgName}>{list.name}</p>
                    <p>@{list.username}</p>
                  </div>
                </div>
                <Link to={`/users/${list._id}`} className={classes.btnFollow}>
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
