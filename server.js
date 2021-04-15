const express = require('express');
const dotenv = require('dotenv');
const color = require('color');
const morgan = require('morgan');
const transaction = require('./router/transaction');
 
  
 

dotenv.config({path:'./config/config.env'});
const app = express();
 
  if(process.env.NODE_ENV =='development'){
      app.use(morgan('dev'))
  }
// app.use('/api/v1/transactions',transaction);
// app.get('/api/v1/transactions' ,(req,res)=>res.send("hello"))
app.use(express.json())
app.use('/api/v1/transactions',transaction)

const PORT = process.env.PORT || 5000
app.listen(PORT , console.log(`server is running on ${process.env.NODE_ENV} mode and on ${PORT} port`));