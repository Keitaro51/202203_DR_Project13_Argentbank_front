import propTypes from 'prop-types'

function FormInput({ content, type, idFor, prefill }) {
  return (
    <div className="input-wrapper">
      <label htmlFor={idFor}>{content}</label>
      <input type={type} id={idFor} autoComplete="off" defaultValue={prefill} />
    </div>
  )
}

FormInput.propTypes = {
  type: propTypes.string,
  idFor: propTypes.string,
}

export default FormInput
