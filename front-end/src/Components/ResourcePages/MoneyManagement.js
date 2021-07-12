import React, { Component } from 'react'

export default class MoneyManagement extends Component {
  render() {
    return (
      <div className="container">
        <h2> Budgeting 101: How to Budget Money </h2>
        <img src="https://www.nerdwallet.com/assets/blog/wp-content/uploads/2016/10/how-to-create-budget-600x255.jpg" alt="finance image"/> 
        <div className="main-text">
          <p> 
            If I have take-home pay of, say, $2,000 a month, how can I pay for housing, food, insurance, health care, debt repayment and fun without running out of money? That’s a lot to cover with a limited amount, and this is a zero-sum game. The answer is to <b> make a budget.  </b> 
          </p>
          <p>
            <b>What is a budget?</b> A budget is a plan for every dollar you have. It’s not magic, but it represents more financial freedom and a life with much less stress. Here’s how to set one up.
            <a href="https://www.nerdwallet.com/article/finance/how-to-budget" target="_blank"> Read More...</a>
          </p>
        </div>
        
      </div>
    )
  }
}
