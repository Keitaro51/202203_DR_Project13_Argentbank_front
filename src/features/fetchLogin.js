//Redux action creators and reducer for login user fetch request statement
import { createAction } from '@reduxjs/toolkit'
import { produce } from 'immer'
import { postLogin } from '../services/postData'
import { selectFetchStatus } from '../utils/selectors'

const initialState = {
  status: 'void',
  data: null,
  error: null,
}

const loginFetching = createAction('login/fetching')
const loginResolved = createAction('login/resolved')
const loginRejected = createAction('login/rejected')

export function fetchLoginReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case loginFetching.toString(): {
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
      case loginResolved.toString(): {
        if (draft.status === 'pending' || draft.status === 'updating') {
          draft.data = action.payload
          draft.status = 'resolved'
          return
        }
        return
      }
      case loginRejected.toString(): {
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
 * Manage login fetch request redux statement
 *
 * @param   {object}  store  current redux store
 * @param   {object}  body   request body
 *
 * @return  {void}         exits the function if a request is already in progress
 */
export async function fetchOrUpdateLogin(store, body) {
  const status = selectFetchStatus(store.getState(), 'fetchLogin')
  if (status === 'pending' || status === 'updating') {
    return
  }
  store.dispatch(loginFetching())
  try {
    const data = await postLogin(body)
    store.dispatch(loginResolved(data))
    store.dispatch({ type: 'login', payload: data })
  } catch (error) {
    store.dispatch(loginRejected(error))
  }
}
