//Redux action creators and reducer for login user fetch request statement
import { createSlice } from '@reduxjs/toolkit'
import { postLogin } from '../services/postData'
import { selectFetchStatus } from '../utils/selectors'

const { actions, reducer } = createSlice({
  name: 'login',
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
 * Manage login fetch request redux statement
 *
 * @param   {object}  body   request body
 *
 * @return  {void}         exits the function if a request is already in progress
 */
export function fetchOrUpdateLogin(body) {
  return async (dispatch, getState) => {
    const status = selectFetchStatus(getState(), 'fetchLogin')
    if (status === 'pending' || status === 'updating') {
      return
    }
    dispatch(actions.fetching())
    try {
      const data = await postLogin(body)
      dispatch(actions.resolved(data))
      dispatch({ type: 'login', payload: data })
    } catch (error) {
      dispatch(actions.rejected(error))
    }
  }
}
