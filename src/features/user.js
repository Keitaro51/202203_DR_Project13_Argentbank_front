import { produce } from 'immer'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  bearerToken: '',
  isUpdating: false,
}

export const loginAction = (data) => ({
  type: 'login',
  payload: data,
})

export const userInfoAction = () => ({
  type: 'userinfo',
})

export const signOutAction = () => ({
  type: 'signout',
})

export function userReducer(state = initialState, action) {
  if (action.type === 'login') {
    return produce(state, (draft) => {
      draft.bearerToken = action.payload.body.token
    })
  }
  if (action.type === 'userinfo') {
    return produce(state, (draft) => {
      draft.firstName = action.payload.body.firstName
      draft.lastName = action.payload.body.lastName
      draft.email = action.payload.body.email
    })
  }
  if (action.type === 'signout') {
    return initialState
  }
  return state
}
