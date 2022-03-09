import { PROFILE_ROUTE } from '../config'

import { put } from '../helpers/fetchWrappers'

const putProfile = (body, bearerToken) => {
  return put(`${PROFILE_ROUTE}`, body, bearerToken)
}

export { putProfile }
