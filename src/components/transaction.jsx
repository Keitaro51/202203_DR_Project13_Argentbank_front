import Button from './button'

function Transaction() {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
        <p className="account-amount">$2,082.79</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <Button content="View transactions" classStyle="transaction-button" />
      </div>
    </section>
  )
}

export default Transaction
