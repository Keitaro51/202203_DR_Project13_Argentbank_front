import { produce } from 'immer'
import { postLogin } from '../services/postData'
import { selectFetchStatus } from '../utils/selectors'

const initialState = {
  status: 'void',
  data: null,
  error: null,
}

const FETCHING = 'login/fetching'
const RESOLVED = 'login/resolved'
const REJECTED = 'login/rejected'

const loginFetching = () => ({ type: FETCHING })
const loginResolved = (data) => ({ type: RESOLVED, payload: data })
const loginRejected = (error) => ({ type: REJECTED, payload: error })

export function fetchLoginReducer(state = initialState, action) {
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
