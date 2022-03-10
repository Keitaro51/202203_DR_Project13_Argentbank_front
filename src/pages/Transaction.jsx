import { useParams } from 'react-router-dom'
import React from 'react'

import { accounts } from '../mock/accounts'

/**
 * transactions page component / finish implementation in project phase 2
 * @component
 */
function Transaction() {
  const { id } = useParams()

  const accountInfo = accounts.find((account) => account.id === id)

  return (
    <main className="account-wrapper">
      <div className="header-account-wrapper">
        {accountInfo.title}
        {accountInfo.amount}
        {accountInfo.description}
      </div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>DATE</th>
              <th>DESCRIPTION</th>
              <th>AMOUNT</th>
              <th>BALANCE</th>
            </tr>
          </thead>
          <tbody>
            {accountInfo.transactions.map((transaction) => (
              <React.Fragment key={transaction.id}>
                <tr>
                  <td>
                    <i className="fa fa-angle-down"></i>
                  </td>
                  <td>{dateFormater(transaction.date)}</td>
                  <td>{transaction.description}</td>
                  <td>${transaction.amount}</td>
                  <td>BALANCE</td>
                </tr>
                <tr>
                  <td>Transaction Type: {transaction.type}</td>
                </tr>
                <tr>
                  <td>
                    Category: {transaction.category}
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    Notes: {transaction.notes}
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default Transaction

function dateFormater(date) {
  return date
}
