// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, changeAmount} = props
  const {value} = denominationDetails

  const onClickAmountChange = () => {
    changeAmount(value)
  }

  return (
    <li className="li-container">
      <button type="button" className="button" onClick={onClickAmountChange}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
