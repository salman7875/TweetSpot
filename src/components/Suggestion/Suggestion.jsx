/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { useRouteLoaderData } from 'react-router-dom'
import classes from './suggestion.module.css'

const Suggestion = () => {
  const { users } = useRouteLoaderData('root')

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Suggestions</h2>
        <ul className={classes.lists}>
          {users.map(data => (
            <li className={classes.list} key={data._id}>
              <div className={classes.listItem}>
                <div className={classes.imgContainer}>
                  <img src={data.avatar} alt={data.name} />
                  <div>
                    <p className={classes.bgName}>{data.name}</p>
                    <p>@{data.username}</p>
                  </div>
                </div>
                <a href='#' className={classes.btnFollow}>
                  Follow
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Suggestion
