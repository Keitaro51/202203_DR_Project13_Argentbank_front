import { LOGIN_ROUTE, SIGNUP_ROUTE, PROFILE_ROUTE } from '../config'

import { post } from '../helpers/fetchWrappers'

export const postLogin = (body) => {
  return post(`${LOGIN_ROUTE}`, body)
}

export const postSignUp = (body) => {
  return post(`${SIGNUP_ROUTE}`, body)
}

export const postProfile = (bearerToken) => {
  return post(`${PROFILE_ROUTE}`, {}, bearerToken)
}
