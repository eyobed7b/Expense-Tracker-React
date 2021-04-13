import React,{useContext} from 'react'
import {GlobalCOntext}  from '../context/GolbalState'
import {Transaction} from './Transaction'

export const TransactionList = () => {
    const {transaction} =  useContext(GlobalCOntext)
   
    return (
        <>
            <h3>History</h3>
      <ul   className="list">
      {transaction.map((transaction)=>(<Transaction key={transaction.id} transaction={transaction} /> ))}
      </ul>
        </>
    )
}

 
