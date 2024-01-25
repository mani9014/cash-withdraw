// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  changeAmount = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="bg-container">
        <div className="profile-container">
          <p className="s-letter">S</p>
          <p className="sarah-name">Sarah Williams</p>
        </div>

        <div className="Balance-container">
          <p className="balance-heading">Your Balance</p>
          <div className="change-amount-container">
            <p className="rupees">{balance}</p>
            <p className="in-rupees">In Rupees</p>
          </div>
        </div>

        <p className="withdraw">Withdraw</p>

        <p className="sum-heading">CHOOSE SUM (IN RUPEES)</p>

        <div>
          <ul className="order-items">
            {denominationsList.map(eachitem => (
              <DenominationItem
                denominationDetails={eachitem}
                key={eachitem.id}
                changeAmount={this.changeAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
