import { USER } from '../config'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchOrUpdateLogin } from '../features/fetchLogin'
import { selectIsConnected } from '../utils/selectors'

import Button from '../components/Button'
import FormInput from '../components/FormInput'

/**
 * login page component
 * @component
 */
function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const isConnected = useSelector(selectIsConnected)
  useEffect(() => {
    isConnected && navigate('/user')
  }, [isConnected, navigate])

  /**
   * submit login form and redirect to user page
   *
   * @param {object} e  event
   */
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(
      fetchOrUpdateLogin({
        email: document.getElementById('username').value,
        password: document.getElementById('password').value,
      })
    )
    navigate('/user')
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <FormInput
            content="Username"
            type="text"
            idFor="username"
            prefill={USER.email}
          />
          <FormInput
            content="Password"
            type="password"
            idFor="password"
            prefill={USER.password}
          />
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <Button type="submit" content="Sign In" classStyle="sign-in-button" />
        </form>
      </section>
    </main>
  )
}

export default Login
