import { PROFILE_ROUTE } from '../config'
import { put } from '../helpers/fetchWrappers'

/**
 * update user profile (first and/or last names only)
 *
 * @param   {object}  body request body
 * @param   {string}  bearerToken  user bearer token for auth routes
 *
 * @return  {object}  update confirmation
 */
const putProfile = (body, bearerToken) => {
  return put(`${PROFILE_ROUTE}`, body, bearerToken)
}

export { putProfile }
