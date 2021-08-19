import React,{useState,useContext} from 'react'
import {GlobalCOntext} from '../context/GolbalState'
import {Button} from 'react-bootstrap'

const AddTransactionhtmlForm = () => {

   
        const [text, setText ] =useState('')
        const [amount, setamount ] =useState(0)
        const{addTransaction,userInfo } = useContext(GlobalCOntext)
        let user_id = JSON.parse( userInfo)._id
           const onSubmit =( e)=>{
              
               e.preventDefault();
               if(!text && !amount){
                  alert("please insert the text and amount")
                   return
               }
                const newTransaction = {
                    id:Math.floor(Math.random() * 100000000),
                    text,
                    amount:+amount,
                    userId:user_id
                }
                
            addTransaction(newTransaction,userInfo);

           }
    return (
        <>
        <h3>Add new transaction</h3>
      <form  onSubmit={onSubmit}>
        <div className="htmlForm-control">
          <label htmlFor="text">Text</label>
          <input type="text" value = {text} onChange={(e)=>setText(e.target.value)}  placeholder="Enter text..." />
        </div>
        <div className="htmlForm-control">
          <label htmlFor="amount"
            >amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number"   value ={amount} onChange={(e)=>setamount(e.target.value)}   placeholder="Enter amount..." />
        </div>
        <Button onClick={onSubmit} className="btn">Add transaction

        </Button>
        {/* <button className="btn">Add transaction</button> */}
      </form>    
        </>
    )
}

export default AddTransactionhtmlForm
