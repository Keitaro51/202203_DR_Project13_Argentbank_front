//Redux action creators and reducer for update profile fetch request statement
import { createSlice } from '@reduxjs/toolkit'
import { putProfile } from '../services/putData'
import { selectFetchStatus, selectBearerToken } from '../utils/selectors'
import * as userActions from '../features/user'

const { actions, reducer } = createSlice({
  name: 'updateProfile',
  initialState: {
    status: 'void',
    data: null,
    error: null,
  },
  reducers: {
    fetching: (state) => {
      if (state.status === 'void') {
        state.status = 'pending'
        return
      }
      if (state.status === 'rejected') {
        state.error = null
        state.status = 'pending'
        return
      }
      if (state.status === 'resolved') {
        state.status = 'updating'
        return
      }
      return
    },
    resolved: (state, action) => {
      if (state.status === 'pending' || state.status === 'updating') {
        state.data = action.payload
        state.status = 'resolved'
        return
      }
      return
    },
    rejected: (state, action) => {
      if (state.status === 'pending' || state.status === 'updating') {
        state.error = action.payload
        state.data = null
        state.status = 'rejected'
        return
      }
      return
    },
  },
})

export default reducer

/**
 * Manage update profile fetch request redux statement
 *
 * @param   {object}  body   request body
 *
 * @return  {void}         execute request and track request state
 */
export function fetchOrUpdatePutProfile(body) {
  /**
   * Launch api request to service file
   *
   * @param   {function}  dispatch  reudx dispatch method
   * @param   {function}  getState  redux getState method
   *
   * @return  {void}            exit if request already in progress
   */
  return async (dispatch, getState) => {
    const status = selectFetchStatus(getState(), 'fetchUpdate')
    const token = selectBearerToken(getState())
    if (status === 'pending' || status === 'updating') {
      return
    }
    dispatch(actions.fetching())
    try {
      const data = await putProfile(body, token)
      if (data.status !== 200) {
        throw new Error(data.message)
      } else {
        dispatch(actions.resolved(data))
        dispatch(userActions.update(data.body))
      }
    } catch (error) {
      dispatch(actions.rejected(error.message))
    }
  }
}
