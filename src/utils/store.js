//Redux store

import { createStore, combineReducers } from 'redux'

import { fetchLoginReducer } from '../features/fetchLogin'
import { fetchPostProfileReducer } from '../features/fetchUser'
import { fetchPutProfileReducer } from '../features/fetchUpdate'
import { userReducer } from '../features/user'

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const reducer = combineReducers({
  fetchLogin: fetchLoginReducer,
  fetchUser: fetchPostProfileReducer,
  fetchUpdate: fetchPutProfileReducer,
  user: userReducer,
})

export const store = createStore(reducer, reduxDevtools)
