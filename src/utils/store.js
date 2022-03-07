import { createStore } from 'redux'

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const initialState = {
  firstName: '',
  lastName: '',
  bearerToken: '',
  isUpdating: false,
}

export const loginAction = () => ({
  type: 'login',
})

export const signOutAction = () => ({
  type: 'signout',
})

function reducer(state, action) {
  if (action.type === 'login') {
    return {
      ...state,
      firstName: 'Abed',
      lastName: 'cool cool cool Nadir',
      bearerToken: 'yolo',
    }
  }
  if (action.type === 'signout') {
    return initialState
  }
  return state
}

export const store = createStore(reducer, initialState, reduxDevtools)
