const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;
 

 
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
     userId:{
                 type:ObjectId,
                 required:true,
                 ref: 'User'

     },
     
     createdAt:{
         type:Date,
         default:Date.now
     }
 }))

 module.exports = Transaction