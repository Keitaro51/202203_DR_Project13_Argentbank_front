import propTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchOrUpdatePutProfile } from '../features/fetchUpdate'

/**
 * button component
 * @param {string} content button label prop
 * @param {string} classStyle button css class style prop
 * @param {string} type button type prop
 * @param {string} clickAction onclicl action to perform prop (see clickManager())
 * @component
 */
function Button({ content, classStyle, type, clickAction }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  /**
   * define onclick action to perform depending on button props
   * @param {object} e click event
   */
  function clickManager(e) {
    if (clickAction === 'toggleEditMode') {
      dispatch({ type: 'toggleEditMode' })
    }
    if (clickAction === 'update') {
      //TODO add more validation and empty field case
      const newFirstName = document.getElementById('firstName').value
      const newLastName = document.getElementById('lastName').value
      dispatch(
        fetchOrUpdatePutProfile({
          firstName: newFirstName,
          lastName: newLastName,
        })
      )
    }
    //TODO toggleEditMode still active if user leave page manually
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
  clickAction: propTypes.string,
}

export default Button
