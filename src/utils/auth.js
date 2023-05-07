import { redirect } from 'react-router-dom'

/* eslint-disable no-unused-vars */
export const getAuthToken = () => {
  const token = localStorage.getItem('token')
  return token
}

export const logout = () => {
  const token = localStorage.removeItem('token')

  if (!token) {
    return redirect('/login')
  }

  return null
}
