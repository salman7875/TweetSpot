/* eslint-disable no-unused-vars */
import classes from './search.module.css'

const Search = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.search}>
          <input type='search' placeholder='Search...' />
        </div>

        <div className={classes.result}>
          <div className={classes.imgContainer}>
            <img src='https://avatars.githubusercontent.com/u/78205495?v=4' />
            <div>
              <p className={classes.bgName}>Amaan Alam</p>
              <p>@amaan_sk</p>
            </div>
          </div>
          <a href='#' className={classes.btnFollow}>
            Follow
          </a>
        </div>
      </div>
    </div>
  )
}

export default Search
