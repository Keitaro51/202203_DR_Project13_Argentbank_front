import { useSelector } from 'react-redux'
import { selectUserInfo } from '../utils/selectors'
import { useDispatch } from 'react-redux'
import { fetchOrUpdatePutProfile } from '../features/fetchUpdate'

import Button from '../components/Button'
import FormInput from '../components/FormInput'

/**
 * user edit form component when edit mode activated
 * @component
 */
function Edit() {
  const { firstName, lastName } = useSelector(selectUserInfo)
  const dispatch = useDispatch()

  /**
   * submit edit profile form
   *
   * @param {object} e  event
   */
  function handleSumbit(e) {
    e.preventDefault()
    const newFirstName = document.getElementById('firstName').value
    const newLastName = document.getElementById('lastName').value
    dispatch(
      fetchOrUpdatePutProfile({
        firstName: newFirstName,
        lastName: newLastName,
      })
    )
  }

  return (
    <form onSubmit={handleSumbit} className="edit-name-form">
      <div className="input-row-wrapper">
        <FormInput type="text" idFor="firstName" prefill={firstName} />
        <FormInput type="text" idFor="lastName" prefill={lastName} />
      </div>
      <div className="button-row-wrapper">
        <Button content="Save" type="submit" classStyle="edit-button" />
        <Button
          type="button"
          content="Cancel"
          classStyle="edit-button"
          clickAction="toggleEditMode"
        />
      </div>
    </form>
  )
}
export default Edit
