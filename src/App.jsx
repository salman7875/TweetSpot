/* eslint-disable no-unused-vars */
import Feed, { getSuggestedUser } from './components/Feed/Feed'
import Login, { loginUser } from './components/Login/Login'
import Profile, { getCurrentProfile } from './components/Profile/Profile'
import Register, { registerUserAction } from './components/Register/Register'
import Search from './components/Search/Search'
import TweetForm from './components/TweetForm/TweetForm'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: getSuggestedUser,
    id: 'root',
    children: [
      {
        index: true,
        element: <Feed />
      },
      { path: 'search', element: <Search /> },
      { path: 'profile', element: <Profile />, loader: getCurrentProfile }
    ]
  },
  { path: '/create-tweet', element: <TweetForm /> },
  { path: '/login', element: <Login />, action: loginUser },
  {
    path: '/register',
    element: <Register />,
    action: registerUserAction,
    id: 'register'
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
