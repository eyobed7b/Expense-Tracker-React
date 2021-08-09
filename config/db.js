const mongoose = require('mongoose')
 

const connectDb = async()=>{
   await  mongoose.connect(process.env.Database)
    .then(() => console.log("mongooes is connected "))
    .catch(err => console.log("ere   db connection ", err))
}

module.exports = connectDb