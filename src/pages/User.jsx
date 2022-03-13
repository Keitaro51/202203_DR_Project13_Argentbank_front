import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectIdentity,
  selectBearerToken,
  selectIsEditing,
} from '../utils/selectors'

import { fetchOrUpdatePostProfile } from '../features/fetchProfile'

import Account from '../components/Account'
import Button from '../components/Button'
import Edit from '../components/Edit'

/**
 * user accounts page component
 * @component
 */
function User() {
  const dispatch = useDispatch()
  const bearerToken = useSelector(selectBearerToken)
  const isEditing = useSelector(selectIsEditing)
  const navigate = useNavigate()

  useEffect(() => {
    if (bearerToken) {
      dispatch(fetchOrUpdatePostProfile(bearerToken))
    } else {
      navigate('/login')
    }
  }, [dispatch, bearerToken, navigate])

  const firstName = useSelector(selectIdentity('firstName'))
  const lastName = useSelector(selectIdentity('lastName'))

  return (
    <main className="main bg-dark">
      {isEditing ? (
        <div className="header">
          <h1>Welcome back</h1>
          <Edit />
        </div>
      ) : (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName} {lastName} !
          </h1>
          <Button
            clickAction="toggleEditMode"
            content="Edit Name"
            classStyle="edit-button"
          />
        </div>
      )}
      <h2 className="sr-only">Accounts</h2>
      <Account />
    </main>
  )
}

export default User
