 
import './App.css';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import{ TransactionList} from './components/TransactionList'
import AddTransactionForm from './components/AddTransactionForm'
import {useContext} from 'react'
import {GlobalCOntext}  from './context/GolbalState'
import React, {useState, useEffect} from "react"
 

function App({ location, history }) {
 
  return (
    <div>

    <Header/>
  
    
    <div>
<Balance/>
    <IncomeExpenses/>
    <TransactionList/>
    <AddTransactionForm/>
    </div>
    
    </div>
  );
}

export default App;
