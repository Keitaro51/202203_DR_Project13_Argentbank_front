import axios from 'axios'

/**
 * fetch api for post endpoints
 *
 * @param   {string}  url  api route full url
 * @param   {object}  body  request body
 * @param   {string}  bearerToken  user bearer token for auth routes (optionnal)
 *
 * @return  {promise}       return fulfilled promise or loged error
 */
const post = (url, body, bearerToken) => {
  if (bearerToken) {
    axios.defaults.headers.common = { Authorization: `Bearer ${bearerToken}` }
  }
  return axios
    .post(url, body)
    .then(handleResponse)
    .catch((error) => console.log(error))
}

/**
 * fetch api for put endpoints
 *
 * @param   {string}  url  api route full url
 * @param   {object}  body  request body
 * @param   {string}  bearerToken  user bearer token for auth routes
 *
 * @return  {promise}       return fulfilled promise or loged error
 */
const put = (url, body, bearerToken) => {
  const headers = {
    Authorization: `Bearer ${bearerToken}`,
  }
  return axios
    .put(url, body, { headers })
    .then(handleResponse)
    .catch((error) => console.log(error))
}

/**
 * fetched full data
 *
 * @param   {object}  response  fulfilled promise data
 *
 * @return  {object}            return ready to use data
 */
const handleResponse = (response) => {
  return response.data
}

export { post, put }
