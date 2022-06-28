// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteItem} = props
  const {id, Title, Amount, Type} = transactionDetails
  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <div className="result-inner">
      <p className="item">{Title}</p>
      <p className="item">{Amount}</p>
      <p className="item">{Type}</p>
      <div>
        <img
          alt="delete"
          onClick={onDelete}
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
        />
      </div>
    </div>
  )
}
export default TransactionItem
