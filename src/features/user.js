//Redux action creators and reducer for current user statement
import { createAction, createReducer } from '@reduxjs/toolkit'

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

export default createReducer(initialState, (builder) => {
  return builder
    .addCase(loginAction, (draft, action) => {
      draft.bearerToken = action.payload.body.token
      return
    })
    .addCase(userInfoAction, (draft, action) => {
      draft.firstName = action.payload.body.firstName
      draft.lastName = action.payload.body.lastName
      draft.email = action.payload.body.email
      return
    })
    .addCase(toggleEditMode, (draft) => {
      draft.isEditing = !draft.isEditing
      return
    })
    .addCase(updateUser, (draft, action) => {
      draft.firstName = action.payload.body.firstName
      draft.lastName = action.payload.body.lastName
      draft.isEditing = !draft.isEditing
      return
    })
    .addCase(signOutAction, () => {
      return initialState
    })
})
