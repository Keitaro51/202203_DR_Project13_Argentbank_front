import HeroBanner from '../components/HeroBanner'
import Feature from '../components/Features'

import chatIcon from '../assets/icon-chat.svg'
import moneyIcon from '../assets/icon-money.svg'
import securityIcon from '../assets/icon-security.svg'

/**
 * home page component
 * @component
 */
function Home() {
  return (
    <main>
      <HeroBanner />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <Feature
          title="You are our #1 priority"
          content="Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes."
          icon={chatIcon}
          alt="Chat Icon"
        />
        <Feature
          title="More savings means higher rates"
          content="The more you save with us, the higher your interest rate will be!"
          icon={moneyIcon}
          alt="Money Icon"
        />
        <Feature
          title="Security you can trust"
          content="We use top of the line encryption to make sure your data and money is always safe."
          icon={securityIcon}
          alt="Security Icon"
        />
      </section>
    </main>
  )
}

export default Home
