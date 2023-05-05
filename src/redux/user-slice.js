/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'
import { json, redirect } from 'react-router-dom'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    user: {},
    isLoggedIn: false
  },
  reducers: {
    loggedIn: (state, action) => {
      state.isLoggedIn = true
      state.user = action.payload
    },
    loggedOut: (state, action) => {
      state.isLoggedIn = false
      state.user = null
    }
  }
})

export const userActions = userSlice.actions

export default userSlice.reducer
