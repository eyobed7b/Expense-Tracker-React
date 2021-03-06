
import {useContext} from 'react'
import {GlobalCOntext} from '../context/GolbalState'
export const Transaction= ({transaction}) => {
    const sign = transaction.amount>0?'+':'-'
    const{deleteTransaction ,userInfo} = useContext(GlobalCOntext)
     
    return (
        <li className={transaction.amount>0?'plus':'minus'}>
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={()=>deleteTransaction(transaction._id, userInfo)}  className="delete-btn">x</button>
       </li>
    )
}

  
