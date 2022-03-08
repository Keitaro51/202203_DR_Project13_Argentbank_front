import { createStore, combineReducers } from 'redux'

import { fetchLoginReducer } from '../features/fetchLogin'
import { fetchPostProfileReducer } from '../features/fetchUser'
import { userReducer } from '../features/user'

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const reducer = combineReducers({
  fetchLogin: fetchLoginReducer,
  fetchUser: fetchPostProfileReducer,
  user: userReducer,
})

export const store = createStore(reducer, reduxDevtools)
