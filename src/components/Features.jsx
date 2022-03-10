import propTypes from 'prop-types'

/**
 * company values display component
 * @param {string} title feature title prop
 * @param {string} content feature descriptive text prop
 * @param {string} icon feature icon source prop
 * @param {string} alt feature icon alternative texte prop
 * @component
 */
function Feature({ title, content, icon, alt }) {
  return (
    <>
      <div className="feature-item">
        <img src={icon} alt={alt} className="feature-icon" />
        <h3 className="feature-item-title">{title}</h3>
        <p>{content}</p>
      </div>
    </>
  )
}

Feature.propTypes = {
  title: propTypes.string,
  content: propTypes.string,
  icon: propTypes.string,
  alt: propTypes.string,
}

export default Feature
