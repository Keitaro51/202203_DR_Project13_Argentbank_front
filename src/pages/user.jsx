import { useParams } from 'react-router-dom'
import Button from '../components/button'

function User() {
  const { id } = useParams()
  return <div>USER PAGE{id}</div>
}

export default User
