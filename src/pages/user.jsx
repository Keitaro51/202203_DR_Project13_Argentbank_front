import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useStore } from 'react-redux'
import { selectIdentity, selectBearerToken } from '../utils/selectors'

import { fetchOrUpdatePostProfile } from '../features/fetchUser'

import Transaction from '../components/transaction'
import Button from '../components/button'

function User() {
  const store = useStore()
  const bearerToken = selectBearerToken(store.getState())

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
      <div className="header">
        <h1>
          Welcome back
          <br />
          {firstName} {lastName} !
        </h1>
        <Button content="Edit Name" classStyle="edit-button" />
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Transaction />
    </main>
  )
}

export default User
