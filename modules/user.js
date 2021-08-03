const mongoose = require('mongoose')
 

 
  mongoose.connect('mongodb://localhost/expense-tracker')
    .then(() => console.log("mongooes is connected "))
    .catch(err => console.log("ere   db connection ", err))
 
    const User = mongoose.model('User',new mongoose.Schema({
        name:{
            type:String,
            trim:true,
            required:[true,'please insert the name']
        },
        email:{
            type:String,
            required:[true,'please insert the email']
        },
        password:{
            type:String,
            required:[true,'please insert the password']
        },
        createdAt:{
            type:Date,
            default:Date.now
        }
    }))
   
    module.exports = User