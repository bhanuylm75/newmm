import './index.css'

const MoneyDetails = props => {
  const {moneyDetails} = props
  const {imgUrl, text, value, alt} = moneyDetails

  return (
    <div className={`list ${alt}`}>
      <img className="img" alt={alt} src={imgUrl} />
      <div className="inner-card">
        <p className="para">{text}</p>
        <p className="para"> Rs {value}</p>
      </div>
    </div>
  )
}
export default MoneyDetails
