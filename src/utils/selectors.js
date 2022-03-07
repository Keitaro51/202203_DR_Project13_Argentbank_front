/**
 * Select first or last name in state
 *
 * @param   {string}  _stName  firstName or lastName
 *
 * @return  {string}           stored first or last name
 */
export const selectIdentity = (_stName) => {
  return (state) => state[_stName]
}

/**
 * check if a user is connected
 *
 * @return {boolean}  true if bearer token exist in state
 */
export const selectIsConnected = (state) => state.bearerToken !== ''
