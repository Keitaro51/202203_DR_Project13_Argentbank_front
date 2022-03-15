import error404 from '../assets/error404.png'
import Button from '../components/Button'

function NotFound() {
  return (
    <main>
      <Button
        content="Revenir à la page d'acceuil"
        classStyle="edit-button"
        clickAction="return"
      />
      <p>La page que vous recherchez n'existe pas</p>
      <img src={error404} alt="error 404 page not found" />
    </main>
  )
}

export default NotFound
