/* eslint-disable no-unused-vars */
import { feedData } from '../../data'
import classes from './suggestion.module.css'

const Suggestion = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Suggestions</h2>
        <ul className={classes.lists}>
          {feedData.map(data => (
            <li className={classes.list} key={data.id}>
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
