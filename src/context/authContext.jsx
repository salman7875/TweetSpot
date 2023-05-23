/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'
import { BASE_URL } from '../utils/request'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || false
  )
  const [token, setToken] = useState(localStorage.getItem('token') || null)

  const auth = async (mode, inputs) => {
    const res = await fetch(BASE_URL + `/api/${mode}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputs)
    })

    if (!res.ok) {
      throw new Error('Something went wrong!')
    }

    const data = await res.json()
    setCurrentUser(data.user)
    setToken(data.token)
    localStorage.setItem('token', data.token)
    localStorage.setItem('user', JSON.stringify(data.user))
  }

  const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  const like = async id => {
    const res = await fetch(BASE_URL + '/api/tweets/action/' + id, {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + token }
    })
  }

  return (
    <AuthContext.Provider value={{ currentUser, auth, token, logout, like }}>
      {children}
    </AuthContext.Provider>
  )
}
