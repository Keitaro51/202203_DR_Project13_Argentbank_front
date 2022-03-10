import propTypes from 'prop-types'

/**
 * form inputs component
 * @param {string} content form label content prop
 * @param {string} type  input type prop
 * @param {string} idFor id/for to connect label/input prop
 * @param {string} prefill input prefill content prop
 * @component
 */
function FormInput({ content, type, idFor, prefill }) {
  return (
    <div className="input-wrapper">
      <label htmlFor={idFor}>{content}</label>
      <input type={type} id={idFor} autoComplete="off" defaultValue={prefill} />
    </div>
  )
}

FormInput.propTypes = {
  content: propTypes.string,
  type: propTypes.string,
  idFor: propTypes.string,
  prefill: propTypes.string,
}

export default FormInput
