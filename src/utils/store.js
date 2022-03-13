//Redux store

import { configureStore } from '@reduxjs/toolkit'

import fetchLoginReducer from '../features/fetchLogin'
import fetchPostProfileReducer from '../features/fetchProfile'
import fetchPutProfileReducer from '../features/fetchUpdate'
import userReducer from '../features/user'

export const store = configureStore({
  reducer: {
    fetchLogin: fetchLoginReducer,
    fetchProfile: fetchPostProfileReducer,
    fetchUpdate: fetchPutProfileReducer,
    currentUser: userReducer,
  },
})
