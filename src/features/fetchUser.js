//Redux action creators and reducer for view profile fetch request statement
import { createAction, createReducer } from '@reduxjs/toolkit'
import { produce } from 'immer'
import { postProfile } from '../services/postData'
import { selectFetchStatus } from '../utils/selectors'

const initialState = {
  status: 'void',
  data: null,
  error: null,
}

const postProfileFetching = createAction('postProfile/fetching')
const postProfileResolved = createAction('postProfile/resolved')
const postProfileRejected = createAction('postProfile/rejected')

export default createReducer(initialState, (builder) => {
  return builder
    .addCase(postProfileFetching, (draft) => {
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
    })
    .addCase(postProfileResolved, (draft, action) => {
      if (draft.status === 'pending' || draft.status === 'updating') {
        draft.data = action.payload
        draft.status = 'resolved'
        return
      }
      return
    })
    .addCase(postProfileRejected, (draft, action) => {
      if (draft.status === 'pending' || draft.status === 'updating') {
        draft.error = action.payload
        draft.data = null
        draft.status = 'rejected'
        return
      }
      return
    })
})

/**
 * Manage view profile fetch request redux statement
 *
 * @param   {object}  store  current redux store
 * @param   {object}  body   request body
 *
 * @return  {void}         exits the function if a request is already in progress
 */
export async function fetchOrUpdatePostProfile(store, bearer) {
  const status = selectFetchStatus(store.getState(), 'fetchUser')
  if (status === 'pending' || status === 'updating') {
    return
  }
  store.dispatch(postProfileFetching())
  try {
    const data = await postProfile(bearer)
    store.dispatch(postProfileResolved(data))
    store.dispatch({ type: 'userinfo', payload: data })
  } catch (error) {
    store.dispatch(postProfileRejected(error))
  }
}
