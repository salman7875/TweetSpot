/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Feed from './components/Feed/Feed'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import Register from './components/Register/Register'
import Search from './components/Search/Search'
import TweetForm from './components/TweetForm/TweetForm'
import Root from './pages/Root'
import Error from './pages/Error'

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import SingleUser from './pages/SingleUser/SingleUser'
import ListFollowers from './pages/ListFollower/ListFollowers'
import { useContext } from 'react'
import { AuthContext } from './context/authContext'
import { getAuthToken } from './utils/auth'

const App = () => {
  const { token } = useContext(AuthContext)

  const ProtectedRoute = ({ children }) => {
    if (!token) {
      return <Navigate to='/login' />
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <Root />
        </ProtectedRoute>
      ),
      errorElement: <Error />,
      children: [
        { index: true, element: <Feed /> },
        { path: 'search', element: <Search /> },
        { path: 'profile', element: <Profile /> },
        { path: 'users/:id', element: <SingleUser /> },
        { path: ':id/followings', element: <ListFollowers /> },
        { path: ':id/followers', element: <ListFollowers /> }
      ]
    },
    { path: '/create-tweet', element: <TweetForm /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> }
  ])
  return <RouterProvider router={router} />
}

export default App
