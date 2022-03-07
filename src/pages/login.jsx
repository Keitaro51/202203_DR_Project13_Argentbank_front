import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import FormInput from '../components/formInput'

function Login() {
  const dispatch = useDispatch()
  let navigate = useNavigate()

  function handleClick() {
    dispatch({ type: 'login' })
    navigate('/user')
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleClick}>
          <FormInput type="text" idFor="username" />
          <FormInput type="password" idFor="password" />
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  )
}

export default Login
