import { useSelector } from 'react-redux'
import { selectIdentity } from '../utils/selectors'

import Button from '../components/Button'
import FormInput from '../components/FormInput'

function Edit() {
  const firstName = useSelector(selectIdentity('firstName'))
  const lastName = useSelector(selectIdentity('lastName'))

  return (
    <form class="edit-name-form">
      <div className="input-row-wrapper">
        <FormInput type="text" idFor="firstName" prefill={firstName} />
        <FormInput type="text" idFor="lastName" prefill={lastName} />
      </div>
      <div className="button-row-wrapper">
        <Button
          content="Edit"
          type="submit"
          classStyle="edit-button"
          clickAction="update"
        />
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
