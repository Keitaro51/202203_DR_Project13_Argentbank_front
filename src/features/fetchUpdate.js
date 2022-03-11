//Redux action creators and reducer for update profile fetch request statement
import { createAction } from '@reduxjs/toolkit'
import { produce } from 'immer'
import { putProfile } from '../services/putData'
import { selectFetchStatus, selectBearerToken } from '../utils/selectors'

const initialState = {
  status: 'void',
  data: null,
  error: null,
}

const putProfileFetching = createAction('putProfile/fetching')
const putProfileResolved = createAction('putProfile/resolved')
const putProfileRejected = createAction('putProfile/rejected')

export function fetchPutProfileReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case putProfileFetching.toString(): {
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
      }
      case putProfileResolved.toString: {
        if (draft.status === 'pending' || draft.status === 'updating') {
          draft.data = action.payload
          draft.status = 'resolved'
          return
        }
        return
      }
      case putProfileRejected.toString: {
        if (draft.status === 'pending' || draft.status === 'updating') {
          draft.error = action.payload
          draft.data = null
          draft.status = 'rejected'
          return
        }
        return
      }
      default:
        return
    }
  })
}

/**
 * Manage update profile fetch request redux statement
 *
 * @param   {object}  store  current redux store
 * @param   {object}  body   request body
 *
 * @return  {void}         exits the function if a request is already in progress
 */
export async function fetchOrUpdatePutProfile(store, body) {
  const status = selectFetchStatus(store.getState(), 'fetchUpdate')
  const token = selectBearerToken(store.getState())
  if (status === 'pending' || status === 'updating') {
    return
  }
  try {
    store.dispatch({ type: 'update', payload: { body } })
    store.dispatch(putProfileFetching())
    const data = await putProfile(body, token)
    store.dispatch(putProfileResolved(data))
  } catch (error) {
    store.dispatch(putProfileRejected(error))
  }
}
