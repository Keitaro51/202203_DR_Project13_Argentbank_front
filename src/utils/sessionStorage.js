//if redux-persist not used (see store.js)
// export const loadState = () => {
//   try {
//     const serializedState = sessionStorage.getItem('state')
//     if (serializedState === null) {
//       return undefined
//     }
//     return JSON.parse(serializedState)
//   } catch (err) {
//     return undefined
//   }
// }

// export const saveState = (state) => {
//   try {
//     const serializedState = JSON.stringify(state)
//     sessionStorage.setItem('state', serializedState)
//   } catch (err) {
//     console.error(err)
//   }
// }
