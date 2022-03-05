import propTypes from 'prop-types'

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
