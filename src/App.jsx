/* eslint-disable no-unused-vars */
import Feed from './components/Feed/Feed'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import Register from './components/Register/Register'
import Search from './components/Search/Search'
import Sidebar from './components/Sidebar/Sidebar'
import Suggestion from './components/Suggestion/Suggestion'
import TweetForm from './components/TweetForm/TweetForm'

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Search />
    </div>
  )
}

export default App
