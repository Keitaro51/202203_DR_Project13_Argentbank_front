import { produce } from 'immer'
import { putProfile } from '../services/putData'
import { selectFetchStatus, selectBearerToken } from '../utils/selectors'

const initialState = {
  status: 'void',
  data: null,
  error: null,
}

const FETCHING = 'putProfile/fetching'
const RESOLVED = 'putProfile/resolved'
const REJECTED = 'putProfile/rejected'

const putProfileFetching = () => ({ type: FETCHING })
const putProfileResolved = (data) => ({ type: RESOLVED, payload: data })
const putProfileRejected = (error) => ({ type: REJECTED, payload: error })

export function fetchPutProfileReducer(state = initialState, action) {
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
