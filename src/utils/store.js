import { createStore } from 'redux'

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const initialState = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  token: '',
}

export const testAction = {
  type: 'abed',
}

function reducer(state, action) {
  if (action.type === 'abed') {
    return {
      ...state,
      firstName: 'Abed',
      lastName: 'cool cool cool Nadir',
      email: 'abed_and_troy@community.com',
    }
  }
  return state
}

export const store = createStore(reducer, initialState, reduxDevtools)
