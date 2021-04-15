import React,{useContext,useEffect} from 'react'
import {GlobalCOntext}  from '../context/GolbalState'
import {Transaction} from './Transaction'

export const TransactionList = () => {
    const {transaction,getTransaction} =  useContext(GlobalCOntext)

    useEffect(()=>{
        getTransaction()
    },[]);
   
    return (
        <>
            <h3>History</h3>
      <ul   className="list">
      {transaction.map((transaction)=>(<Transaction key={transaction._id} transaction={transaction} /> ))}
      </ul>
        </>
    )
}

 
