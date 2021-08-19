 
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
 

function App({ location, history }) {
 
  return (
     
      <Container >
      <Header/>
    <Card style={{ width: '18rem' }}>
    <Balance/>
  
  <Card.Body>
  <IncomeExpenses/>
  
    <TransactionList/>
  </Card.Body>
 
    
  <Card.Body>
  <AddTransactionForm/>
 
  </Card.Body>
</Card>
  
      </Container>

    
    
    
    
    
  );
}

export default App;
