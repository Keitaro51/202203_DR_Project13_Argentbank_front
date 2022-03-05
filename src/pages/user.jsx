import { useParams } from 'react-router-dom'
import Transaction from '../components/transaction'
import Button from '../components/button'

function User() {
  const { id } = useParams()
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <Button content="Edit Name" classStyle="edit-button" />
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Transaction />
    </main>
  )
}

export default User
