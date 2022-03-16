//Redux action creators and reducer for view profile fetch request statement
import { createSlice } from '@reduxjs/toolkit'
import { postProfile } from '../services/postData'
import { selectFetchStatus } from '../utils/selectors'
import * as userActions from '../features/user'

const { actions, reducer } = createSlice({
  name: 'postProfile',
  initialState: {
    status: 'void',
    data: null,
    error: null,
  },
  reducers: {
    fetching: (draft) => {
      if (draft.status === 'void') {
        draft.status = 'pending'
        return
      }
      if (draft.status === 'rejected') {
        draft.error = null
        draft.status = 'pending'
        return
      }
      if (draft.status === 'resolved') {
        draft.status = 'updating'
        return
      }
      return
    },
    resolved: (draft, action) => {
      if (draft.status === 'pending' || draft.status === 'updating') {
        draft.data = action.payload
        draft.status = 'resolved'
        return
      }
      return
    },
    rejected: (draft, action) => {
      if (draft.status === 'pending' || draft.status === 'updating') {
        draft.error = action.payload
        draft.data = null
        draft.status = 'rejected'
        return
      }
      return
    },
  },
})

export default reducer

/**
 * Manage view profile fetch request redux statement
 *
 * @param   {object}  body   request body
 *
 * @return  {void}         execute request and track request state
 */
export function fetchOrUpdatePostProfile(bearer) {
  /**
   * Launch api request to service file
   *
   * @param   {function}  dispatch  reudx dispatch method
   * @param   {function}  getState  redux getState method
   *
   * @return  {void}            exit if request already in progress
   */
  return async (dispatch, getState) => {
    const status = selectFetchStatus(getState(), 'fetchProfile')
    if (status === 'pending' || status === 'updating') {
      return
    }
    dispatch(actions.fetching())
    try {
      const data = await postProfile(bearer)
      if (data.status !== 200) {
        throw new Error(data.message)
      } else {
        dispatch(actions.resolved(data))
        dispatch(userActions.getProfile(data))
      }
    } catch (error) {
      dispatch(actions.rejected(error.message))
    }
  }
}
