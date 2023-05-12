/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'
import classes from './suggestion.module.css'

const Suggestion = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Suggestions</h2>
        <ul className={classes.lists}>
          <li className={classes.list}>
            <div className={classes.listItem}>
              <div className={classes.imgContainer}>
                <img src='data.avatar' alt='data.name' />
                <div>
                  <p className={classes.bgName}>data.name</p>
                  <p>@data.username</p>
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

export default Suggestion
