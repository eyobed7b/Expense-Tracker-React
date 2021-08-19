 
import './App.css';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import{ TransactionList} from './components/TransactionList'
import AddTransactionForm from './components/AddTransactionForm'
import {useContext} from 'react'
import {GlobalCOntext}  from './context/GolbalState'
import React, {useState, useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Card, Container} from 'react-bootstrap'
import Admin from './components/Admin'
 

function App({ location, history }) {
 const {userInfo}  =  useContext(GlobalCOntext)
  return (
     
      <Container >
      <Header/>
       
 { JSON.parse( userInfo).role==1?  <Card style={{ width: '18rem' }}>
    <Balance/>
  
  <Card.Body>
  <IncomeExpenses/>
  
    <TransactionList/>
  </Card.Body>
 
    
  <Card.Body>
  <AddTransactionForm/>
 
  </Card.Body>
</Card>:<Admin/>}
  
      </Container>

    
    
    
    
    
  );
}

export default App;
