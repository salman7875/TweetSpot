/* eslint-disable no-unused-vars */
export const getAuthToken = () => {
  const token = localStorage.getItem('token')
  return token
}

export const logout = () => {
  localStorage.removeItem('token')
}
