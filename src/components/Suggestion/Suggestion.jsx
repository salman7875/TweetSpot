/* eslint-disable no-unused-vars */
import classes from './suggestion.module.css'

const Suggestion = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <ul>
          <li>
            <a href='#'>Amaan</a>
          </li>
          <li>
            <a href='#'>Altaf</a>
          </li>
          <li>
            <a href='#'>Ariz</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Suggestion
