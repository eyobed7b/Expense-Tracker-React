const mongoose = require('mongoose')
 

 
  mongoose.connect('mongodb://localhost/expense-tracker')
    .then(() => console.log("mongooes is connected "))
    .catch(err => console.log("ere   db connection ", err))
 

 const Transaction = mongoose.model('Transaction',new mongoose.Schema({
     text:{
         type:String,
         trim:true,
         required:[true,'please insert the text']
     },
     amount:{
         type:Number,
         required:[true,'please insert the amount']
     },
     createdAt:{
         type:Date,
         default:Date.now
     }
 }))

 module.exports = Transaction