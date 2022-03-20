import propTypes from 'prop-types'
import { forwardRef } from 'react'

/**
 * form inputs component
 * @param {string} content form label content prop
 * @param {string} type  input type prop
 * @param {string} idFor id/for to connect label/input prop
 * @param {string} prefill input prefill content prop
 * @component
 */
const FormInput = ({ content, type, idFor, prefill }, ref) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={idFor}>{content}</label>
      <input
        ref={ref}
        type={type}
        id={idFor}
        autoComplete="off"
        defaultValue={prefill}
      />
    </div>
  )
}

export default forwardRef(FormInput)

FormInput.propTypes = {
  content: propTypes.string,
  type: propTypes.string,
  idFor: propTypes.string,
  prefill: propTypes.string,
}
