import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useStore } from 'react-redux'
import {
  selectIdentity,
  selectBearerToken,
  selectIsEditing,
} from '../utils/selectors'

import { fetchOrUpdatePostProfile } from '../features/fetchUser'

import Transaction from '../components/Transaction'
import Button from '../components/Button'
import Edit from '../components/Edit'

function User() {
  const store = useStore()
  const bearerToken = useSelector(selectBearerToken)
  const isEditing = useSelector(selectIsEditing)
  console.log(bearerToken)
  let navigate = useNavigate()

  useEffect(() => {
    if (bearerToken) {
      fetchOrUpdatePostProfile(store, bearerToken)
    } else {
      navigate('/login')
    }
  }, [store, bearerToken, navigate])

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
      <Transaction />
    </main>
  )
}

export default User
