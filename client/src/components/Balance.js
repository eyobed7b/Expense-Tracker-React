import React,{useContext} from 'react'
import {GlobalCOntext} from '../context/GolbalState'
const Balance = () => {
    const {transaction} = useContext(GlobalCOntext)
    console.log(transaction)
      const  amount = transaction.map((transaction)=>transaction.amount)
      const total = amount.reduce((f,s)=>(f+=s),0).toFixed(2)
      
    return (
        <>
            <h4>Your Balance</h4>
            <h1  >{total}</h1>
        </>
    )
}

export default Balance
