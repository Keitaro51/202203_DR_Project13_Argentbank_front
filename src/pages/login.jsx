import { USER } from '../config'

import { useStore } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchOrUpdateLogin } from '../features/fetchLogin'

import Button from '../components/Button'
import FormInput from '../components/FormInput'

function Login() {
  let navigate = useNavigate()
  const store = useStore()

  async function handleClick(e) {
    e.preventDefault()
    await fetchOrUpdateLogin(store, {
      email: USER.email,
      password: USER.password,
    })
    navigate('/user')
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleClick}>
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
