//Redux selectors

/**
 * Select currentUser state content
 * *
 * @return  {string}           currentUser content
 */
export const selectUserInfo = (state) => {
  return state.currentUser
}

/**
 * check if a user is connected
 *
 * @return {boolean}  true if bearer token exist in state
 */
export const selectIsConnected = (state) => state.currentUser.bearerToken !== ''

/**
 * select fetch request state
 *
 * @param {string} src depend of fetch source (fetch login, user, update, etc...)
 * @return {string}  fetch request status
 */
export const selectFetchStatus = (state, src) => state[src].status
