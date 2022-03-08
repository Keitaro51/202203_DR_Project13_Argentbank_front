import propTypes from 'prop-types'

function Button({ content, classStyle, type }) {
  if (type) {
    return (
      <button type={type} className={classStyle}>
        {content}
      </button>
    )
  }
  return <button className={classStyle}>{content}</button>
}

Button.propTypes = {
  content: propTypes.string,
  classStyle: propTypes.string,
  type: propTypes.string,
}

export default Button
