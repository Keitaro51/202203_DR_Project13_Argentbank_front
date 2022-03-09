import propTypes from 'prop-types'
import { useStore, useDispatch } from 'react-redux'
import { fetchOrUpdatePutProfile } from '../features/fetchUpdate'

function Button({ content, classStyle, type, clickAction }) {
  //TODO create and connect with edit inputs buttons
  const store = useStore()
  const dispatch = useDispatch()

  function clickManager() {
    if (clickAction === 'toggleEditMode') {
      dispatch({ type: 'toggleEditMode' })
    }
    if (clickAction === 'update') {
      //TODO si un champ non rempli
      const newFirstName = document.getElementById('firstName').value
      const newLastName = document.getElementById('lastName').value
      fetchOrUpdatePutProfile(store, {
        firstName: newFirstName,
        lastName: newLastName,
      })
    }
    //TODO cancel quand quitte page?
    if (clickAction === 'cancel') {
      dispatch({ type: 'toggleEditMode' })
    }
  }

  return (
    <button
      onClick={clickAction ? clickManager : undefined}
      type={type}
      className={classStyle}
    >
      {content}
    </button>
  )
}

Button.propTypes = {
  content: propTypes.string,
  classStyle: propTypes.string,
  type: propTypes.string,
}

export default Button
