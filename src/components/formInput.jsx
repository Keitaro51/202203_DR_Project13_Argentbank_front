function FormInput({ type, idFor }) {
  return (
    <div className="input-wrapper">
      <label htmlFor={idFor}>Username</label>
      <input type={type} id={idFor} autoComplete="off" />
    </div>
  )
}

export default FormInput
