 
import {useContext} from 'react'
import {GlobalCOntext}  from '../context/GolbalState'
const IncomeExpenses = () => {
    const {transaction} = useContext(GlobalCOntext)
    const amount = transaction.map((transaction)=>transaction.amount)
    const income = amount.filter(amount=>amount>0).reduce((f,s)=>(f+=s),0)
    const expense = amount.filter(amount=>amount<0).reduce((f,s)=>(f+=s),0)
    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p   className="money plus">{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p   className="money minus">{Math.abs(expense)}</p>
        </div>
      </div>
    )
}

export default IncomeExpenses
