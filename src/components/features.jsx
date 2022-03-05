function Feature({ title, content, icon }) {
  return (
    <>
      <div className="feature-item">
        <img src={icon} alt={icon} className="feature-icon" />
        <h3 className="feature-item-title">{title}</h3>
        <p>{content}</p>
      </div>
    </>
  )
}

export default Feature
