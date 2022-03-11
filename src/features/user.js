//Redux action creators and reducer for current user statement
import { createAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  bearerToken: '',
  isEditing: false,
}

export const loginAction = createAction('login')
export const userInfoAction = createAction('userinfo')
export const signOutAction = createAction('signout')
export const toggleEditMode = createAction('toggleEditMode')
export const updateUser = createAction('update')

export function userReducer(state = initialState, action) {
  if (action.type === loginAction.toString()) {
    return produce(state, (draft) => {
      draft.bearerToken = action.payload.body.token
    })
  }
  if (action.type === userInfoAction.toString()) {
    return produce(state, (draft) => {
      draft.firstName = action.payload.body.firstName
      draft.lastName = action.payload.body.lastName
      draft.email = action.payload.body.email
    })
  }
  if (action.type === toggleEditMode.toString()) {
    return produce(state, (draft) => {
      draft.isEditing = !draft.isEditing
    })
  }
  if (action.type === updateUser.toString()) {
    return produce(state, (draft) => {
      draft.firstName = action.payload.body.firstName
      draft.lastName = action.payload.body.lastName
      draft.isEditing = !draft.isEditing
    })
  }
  if (action.type === signOutAction.toString()) {
    return initialState
  }
  return state
}
