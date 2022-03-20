//Redux action creators and reducer for current user statement
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  bearerToken: '',
  isEditing: false,
}
const { actions, reducer } = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    login: (state, action) => {
      state.bearerToken = action.payload.body.token
      return
    },
    signout: () => {
      return initialState
    },
    getProfile: (state, action) => {
      state.firstName = action.payload.body.firstName
      state.lastName = action.payload.body.lastName
      state.email = action.payload.body.email
      return
    },
    update: (state, action) => {
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.isEditing = !state.isEditing
      return
    },
    toggleEditMode: (state) => {
      state.isEditing = !state.isEditing
      return
    },
    closeEditMode: (state) => {
      state.isEditing = false
      return
    },
  },
})

export const {
  login,
  signout,
  getProfile,
  update,
  toggleEditMode,
  closeEditMode,
} = actions

export default reducer
