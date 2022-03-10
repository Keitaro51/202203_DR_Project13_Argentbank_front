import Button from './Button'

import { accounts } from '../mock/accounts'

/**
 * account row component
 * @component
 */
function Account() {
  return (
    <>
      {accounts.map((account) => (
        <section key={account.id} className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">{account.title}</h3>
            <p className="account-amount">{account.amount}</p>
            <p className="account-amount-description">{account.description}</p>
          </div>
          <div className="account-content-wrapper cta" data-id={account.id}>
            <Button
              content="View transactions"
              classStyle="transaction-button"
              clickAction="transactions"
            />
          </div>
        </section>
      ))}
    </>
  )
}

export default Account
