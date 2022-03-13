//Redux selectors

/**
 * Select first or last name in state
 *
 * @param   {string}  _stName  firstName or lastName
 *
 * @return  {string}           stored first or last name
 */
export const selectIdentity = (_stName) => {
  return (state) => state.currentUser[_stName]
}

/**
 * check if a user is connected
 *
 * @return {boolean}  true if bearer token exist in state
 */
export const selectIsConnected = (state) => state.currentUser.bearerToken !== ''

/**
 * Select bearer token in state
 *
 * @return {string}  connected user's bearer token
 */
export const selectBearerToken = (state) => state.currentUser.bearerToken

/**
 * check if interface is or not in editing mode
 *
 * @return {boolean}  true if edit mode is active
 */
export const selectIsEditing = (state) => state.currentUser.isEditing

/**
 * select fetch request state
 *
 * @param {string} src depend of fetch source (fetch login, user, update, etc...)
 * @return {string}  fetch request status
 */
export const selectFetchStatus = (state, src) => state[src].status
