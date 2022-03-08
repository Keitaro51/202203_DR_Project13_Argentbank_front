import { produce } from 'immer'
import { postProfile } from '../services/postData'
import { selectFetchStatus } from '../utils/selectors'

const initialState = {
  status: 'void',
  data: null,
  error: null,
}

const FETCHING = 'postProfile/fetching'
const RESOLVED = 'postProfile/resolved'
const REJECTED = 'postProfile/rejected'

const postProfileFetching = () => ({ type: FETCHING })
const postProfileResolved = (data) => ({ type: RESOLVED, payload: data })
const postProfileRejected = (error) => ({ type: REJECTED, payload: error })

export function fetchPostProfileReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case FETCHING: {
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
      case RESOLVED: {
        if (draft.status === 'pending' || draft.status === 'updating') {
          draft.data = action.payload
          draft.status = 'resolved'
          return
        }
        return
      }
      case REJECTED: {
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
