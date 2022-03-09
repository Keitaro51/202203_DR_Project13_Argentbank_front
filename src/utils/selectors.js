/**
 * Select first or last name in state
 *
 * @param   {string}  _stName  firstName or lastName
 *
 * @return  {string}           stored first or last name
 */
export const selectIdentity = (_stName) => {
  return (state) => state.user[_stName]
}

/**
 * check if a user is connected
 *
 * @return {boolean}  true if bearer token exist in state
 */
export const selectIsConnected = (state) => state.user.bearerToken !== ''

//TODO merge selectBearerToken with selectIsConnected?
export const selectBearerToken = (state) => state.user.bearerToken

export const selectIsEditing = (state) => state.user.isEditing

export const selectFetchStatus = (state, src) => state[src].status
