import propTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { useStore, useDispatch } from 'react-redux'
import { fetchOrUpdatePutProfile } from '../features/fetchUpdate'

function Button({ content, classStyle, type, clickAction }) {
  //TODO create and connect with edit inputs buttons
  const store = useStore()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function clickManager(e) {
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
    if (clickAction === 'transactions') {
      const accountId = e.target.parentNode.dataset['id']
      navigate(`/transaction/${accountId}`)
    }
  }

  return (
    <button
      onClick={clickAction ? (e) => clickManager(e) : undefined}
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
