/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || false
  )
  const [token, setToken] = useState(
    JSON.stringify(localStorage.getItem('token')) || false
  )

  const auth = async (mode, inputs) => {
    const res = await fetch(`http://localhost:5000/api/${mode}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputs)
    })
    const data = await res.json()
    setCurrentUser(data.user)
    setToken(data.token)
  }

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser))
    localStorage.setItem('token', JSON.stringify(token))
  }, [currentUser, token])

  const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{ currentUser, auth }}>
      {children}
    </AuthContext.Provider>
  )
}
