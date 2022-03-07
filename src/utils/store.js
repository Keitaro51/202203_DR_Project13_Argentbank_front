import { createStore } from 'redux'
import produce from 'immer'

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
    return produce(state, (draft) => {
      draft.firstName = 'Abed'
      draft.lastName = 'cool cool cool Nadir'
      draft.bearerToken = 'yolo'
    })
  }
  if (action.type === 'signout') {
    return initialState
  }
  return state
}

export const store = createStore(reducer, initialState, reduxDevtools)
