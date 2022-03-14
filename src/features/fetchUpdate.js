//Redux action creators and reducer for update profile fetch request statement
import { createSlice } from '@reduxjs/toolkit'
import { putProfile } from '../services/putData'
import { selectFetchStatus, selectBearerToken } from '../utils/selectors'

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
 * @return  {void}         exits the function if a request is already in progress
 */
export function fetchOrUpdatePutProfile(body) {
  return async (dispatch, getState) => {
    const status = selectFetchStatus(getState(), 'fetchUpdate')
    const token = selectBearerToken(getState())
    if (status === 'pending' || status === 'updating') {
      return
    }
    dispatch(actions.fetching())
    try {
      dispatch({ type: 'update', payload: { body } })
      const data = await putProfile(body, token)
      dispatch(actions.resolved(data))
    } catch (error) {
      dispatch(actions.rejected(error))
    }
  }
}
