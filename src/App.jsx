import Feed from './components/Feed/Feed'
import Profile from './components/Profile/Profile'
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Profile />
    </div>
  )
}

export default App
