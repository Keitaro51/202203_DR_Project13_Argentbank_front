import { LOGIN_ROUTE, SIGNUP_ROUTE, PROFILE_ROUTE } from '../config'

import { post } from '../helpers/fetchWrapper'

const postLogin = (body) => {
  return post(`${LOGIN_ROUTE}`, body)
}

const postSignUp = (body) => {
  return post(`${SIGNUP_ROUTE}`, body)
}

const postProfile = (bearerToken) => {
  return post(`${PROFILE_ROUTE}`, {}, bearerToken)
}

export { postLogin, postSignUp, postProfile }
