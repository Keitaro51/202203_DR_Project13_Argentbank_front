//Redux store

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import fetchLoginReducer from '../features/fetchLogin'
import fetchPutProfileReducer from '../features/fetchUpdate'
import userReducer from '../features/user'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'

const persistConfig = {
  key: 'root',
  version: 1,
  storage: storageSession,
}

const rootReducer = combineReducers({
  fetchLogin: fetchLoginReducer,
  fetchUpdate: fetchPutProfileReducer,
  currentUser: userReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

//import { loadState, saveState } from './sessionStorage'

// const persistedState = loadState()

// export const store = configureStore({
//   reducer: {
//     fetchLogin: fetchLoginReducer,
//     fetchUpdate: fetchPutProfileReducer,
//     currentUser: userReducer,
//   },
//   preloadedState: persistedState,
// })

// store.subscribe(() => {
//   saveState({
//     fetchLogin: store.getState().fetchLogin,
//     fetchProfile: store.getState().fetchProfile,
//     fetchUpdate: store.getState().fetchUpdate,
//     currentUser: store.getState().currentUser,
//   })
// })
