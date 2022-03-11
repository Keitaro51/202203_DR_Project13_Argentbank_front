//Redux store

import { configureStore } from '@reduxjs/toolkit'

import { fetchLoginReducer } from '../features/fetchLogin'
import { fetchPostProfileReducer } from '../features/fetchUser'
import { fetchPutProfileReducer } from '../features/fetchUpdate'
import { userReducer } from '../features/user'

export default configureStore({
  reducer: {
    fetchLogin: fetchLoginReducer,
    fetchUser: fetchPostProfileReducer,
    fetchUpdate: fetchPutProfileReducer,
    user: userReducer,
  },
})
