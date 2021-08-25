const express = require('express');
const dotenv = require('dotenv');
const color = require('color');
const morgan = require('morgan');
const transaction = require('./router/transaction');
const user = require('./router/user')
const cors = require('cors')
var fs = require('fs')
var path = require('path')
// const morgan = require('morgan')
 
  


dotenv.config({path:'./config/config.env'});
const app = express();
 
 
      // app.use(morgan('dev'))
  
// app.use('/api/v1/transactions',transaction);
// app.get('/api/v1/transactions' ,(req,res)=>res.send("hello"))
 
const helmet = require("helmet");
const xss = require('xss-clean');
app.use(helmet());
// Prevent XSS attacks
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(xss());
app.use(express.json())
app.use(cors())
app.use(morgan('combined', { stream: accessLogStream }))
app.use('/api',transaction)
app.use('/api', user)

const PORT = process.env.PORT || 5000

app.listen(PORT , console.log(`server is running on ${process.env.NODE_ENV} mode and on ${PORT} port`));