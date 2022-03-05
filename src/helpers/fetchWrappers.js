import axios from 'axios'

const post = (url, body, bearerToken) => {
  if (bearerToken) {
    axios.defaults.headers.common = { Authorization: `bearer ${bearerToken}` }
  }
  return axios
    .post(url, body)
    .then(handleResponse)
    .catch((error) => console.log(error))
}

const put = (url, body, bearerToken) => {
  const headers = {
    Authorization: `Bearer ${bearerToken}`,
  }
  return axios
    .put(url, body, { headers })
    .then(handleResponse)
    .catch((error) => console.log(error))
}

const handleResponse = (response) => {
  return response.data.data
}

export { post, put }
