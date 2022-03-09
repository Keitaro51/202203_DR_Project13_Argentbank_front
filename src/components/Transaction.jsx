import Button from './Button'

import { transactions } from '../mock/transactions'

function Transaction() {
  return (
    <>
      {transactions.map((transaction) => (
        <section key={transaction.title} className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">{transaction.title}</h3>
            <p className="account-amount">{transaction.amount}</p>
            <p className="account-amount-description">
              {transaction.description}
            </p>
          </div>
          <div className="account-content-wrapper cta">
            <Button
              content="View transactions"
              classStyle="transaction-button"
            />
          </div>
        </section>
      ))}
    </>
  )
}

export default Transaction
