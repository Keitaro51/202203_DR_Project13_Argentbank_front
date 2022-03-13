//Redux action creators and reducer for view profile fetch request statement
import { createSlice } from '@reduxjs/toolkit'
import { postProfile } from '../services/postData'
import { selectFetchStatus } from '../utils/selectors'

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
 * @param   {object}  store  current redux store
 * @param   {object}  body   request body
 *
 * @return  {void}         exits the function if a request is already in progress
 */
export function fetchOrUpdatePostProfile(bearer) {
  return async (dispatch, getState) => {
    const status = selectFetchStatus(getState(), 'fetchProfile')
    if (status === 'pending' || status === 'updating') {
      return
    }
    dispatch(actions.fetching())
    try {
      const data = await postProfile(bearer)
      dispatch(actions.resolved(data))
      dispatch({ type: 'getProfile', payload: data })
    } catch (error) {
      dispatch(actions.rejected(error))
    }
  }
}
