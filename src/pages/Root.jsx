/* eslint-disable no-unused-vars */
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import Suggestion from '../components/Suggestion/Suggestion'
import Navbar from '../components/Navbar/Navbar'

const Root = () => {
  return (
    <div style={{ display: 'flex', position: 'relative' }}>
      <Sidebar />
      <div>
        <Outlet />
        <Navbar />
      </div>
      <Suggestion />
    </div>
  )
}

export default Root
