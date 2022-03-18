import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { postProfile } from '../services/postData'
import { useQuery } from 'react-query'
import { selectUserInfo } from '../utils/selectors'
import * as userActions from '../features/user'

import Account from '../components/Account'
import Button from '../components/Button'
import Edit from '../components/Edit'
import { useEffect } from 'react'

/**
 * user accounts page component
 * @component
 */
function User() {
  const { bearerToken, firstName, lastName, isEditing } =
    useSelector(selectUserInfo)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (!bearerToken) {
      navigate('/login')
    }
    return function cleanup() {
      dispatch(userActions.toggleEditMode())
    }
  }, [bearerToken, navigate, dispatch])

  useQuery('getUser', async () => {
    try {
      const data = await postProfile(bearerToken)
      if (data.status !== 200) {
        throw new Error(data.message)
      } else {
        dispatch(userActions.getProfile(data))
        return data
      }
    } catch (error) {
      console.log(error.message)
      navigate('/error404')
      dispatch(userActions.signout())
    }
  })

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
