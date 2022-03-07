import { useSelector } from 'react-redux'
import { selectIdentity } from '../utils/selectors'
import Transaction from '../components/transaction'
import Button from '../components/button'

function User() {
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
