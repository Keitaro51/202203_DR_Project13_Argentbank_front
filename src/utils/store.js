//Redux store

import { configureStore } from '@reduxjs/toolkit'
import { loadState, saveState } from './localStorage'

import fetchLoginReducer from '../features/fetchLogin'
import fetchPostProfileReducer from '../features/fetchProfile'
import fetchPutProfileReducer from '../features/fetchUpdate'
import userReducer from '../features/user'

const persistedState = loadState()

export const store = configureStore({
  reducer: {
    fetchLogin: fetchLoginReducer,
    fetchProfile: fetchPostProfileReducer,
    fetchUpdate: fetchPutProfileReducer,
    currentUser: userReducer,
  },
  preloadedState: persistedState,
})

store.subscribe(() => {
  saveState({
    fetchLogin: store.getState().fetchLogin,
    fetchProfile: store.getState().fetchProfile,
    fetchUpdate: store.getState().fetchUpdate,
    currentUser: store.getState().currentUser,
  })
})
