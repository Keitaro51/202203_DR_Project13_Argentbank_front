import { LOGIN_ROUTE, SIGNUP_ROUTE, PROFILE_ROUTE } from '../config'

import { post } from '../helpers/fetchWrappers'

/**
 * log user request
 *
 * @param   {object}  body request body
 *
 * @return  {object}  response with bearer token if fullfilled
 */
export const postLogin = (body) => {
  return post(`${LOGIN_ROUTE}`, body)
}

/**
 * new user creation request (in progresse, no button implemented into interface)
 *
 * @param   {object}  body request body
 *
 * @return  {object}  creation confirmation
 */
export const postSignUp = (body) => {
  return post(`${SIGNUP_ROUTE}`, body)
}

/**
 * get user informations request
 *
 * @param   {string}  bearerToken  user bearer token for auth routes
 *
 * @return  {object}  user informations
 */
export const postProfile = async (bearerToken) => {
  return await post(`${PROFILE_ROUTE}`, {}, bearerToken)
}
