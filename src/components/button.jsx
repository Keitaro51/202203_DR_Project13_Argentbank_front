import propTypes from 'prop-types'

function Button({ content, classStyle }) {
  return <button className={classStyle}>{content}</button>
}

Button.propTypes = {
  content: propTypes.string,
  classStyle: propTypes.string,
}

export default Button
