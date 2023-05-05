/* eslint-disable no-unused-vars */
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import Suggestion from '../components/Suggestion/Suggestion'

const Root = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div>
        <Outlet />
      </div>
      <Suggestion />
    </div>
  )
}

export default Root