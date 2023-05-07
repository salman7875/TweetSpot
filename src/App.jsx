/* eslint-disable no-unused-vars */
import Feed, { getSuggestedUser, getUserTweets } from './components/Feed/Feed'
import Login, { loginUser } from './components/Login/Login'
import Profile, { getCurrentProfile } from './components/Profile/Profile'
import Register, { registerUserAction } from './components/Register/Register'
import Search, { searchUser } from './components/Search/Search'
import TweetForm from './components/TweetForm/TweetForm'
import Root from './pages/Root'
import Error from './pages/Error'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    loader: getSuggestedUser,
    id: 'root',
    children: [
      { index: true, element: <Feed />, loader: getUserTweets },
      { path: 'search', element: <Search />, action: searchUser },
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
