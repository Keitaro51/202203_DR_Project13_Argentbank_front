import propTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as userActions from '../features/user'

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
      dispatch(userActions.toggleEditMode())
    }
    //FIXME toggleEditMode still active if user leave page manually - how to act before component destroyed?
    if (clickAction === 'cancel') {
      dispatch(userActions.toggleEditMode())
    }
    if (clickAction === 'transactions') {
      const accountId = e.target.parentNode.dataset['id']
      navigate(`/transaction/${accountId}`)
    }
    if (clickAction === 'return') {
      navigate('/')
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
