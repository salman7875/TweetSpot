/* eslint-disable no-unused-vars */
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import Suggestion from '../components/Suggestion/Suggestion'

const Root = () => {
  return (
    <div style={{ display: 'flex', overflowY: 'hidden' }}>
      <Sidebar />
      <div>
        <Outlet />
      </div>
      <Suggestion />
    </div>
  )
}

export default Root
