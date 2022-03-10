//Redux action creators and reducer for current user statement

import { produce } from 'immer'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  bearerToken: '',
  isEditing: false,
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

export const toggleEditMode = () => ({
  type: 'toggleEditMode',
})

export const updateUser = (data) => ({
  type: 'update',
  payload: data,
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
  if (action.type === 'toggleEditMode') {
    return produce(state, (draft) => {
      draft.isEditing = !draft.isEditing
    })
  }
  if (action.type === 'update') {
    return produce(state, (draft) => {
      draft.firstName = action.payload.body.firstName
      draft.lastName = action.payload.body.lastName
      draft.isEditing = !draft.isEditing
    })
  }
  if (action.type === 'signout') {
    return initialState
  }
  return state
}
