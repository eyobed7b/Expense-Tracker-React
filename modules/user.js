const mongoose = require('mongoose')
const bcrypt =  require('bcryptjs')

 
  mongoose.connect('mongodb://localhost/expense-tracker')
    .then(() => console.log("mongooes is connected "))
    .catch(err => console.log("ere   db connection ", err))
 
    // const User = mongoose.model('User',new mongoose.Schema({
    //     name:{
    //         type:String,
    //         trim:true,
    //         required:[true,'please insert the name']
    //     },
    //     email:{
    //         type:String,
    //         required:[true,'please insert the email']
    //     },
    //     password:{
    //         type:String,
    //         required:[true,'please insert the password']
    //     },
    //     createdAt:{
    //         type:Date,
    //         default:Date.now
    //     }
    // }))

    // const Usser = mongoose.model('User',)
    const user = mongoose.Schema({
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
    })
    user.methods.matchPassword = async function (enteredPassword) {
        return await bcrypt.compare(enteredPassword, this.password)
    }
    user.pre('save', async function (next) {
        if (!this.isModified('password')) {
            next()
        }
    
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
    })
   
    // module.exports = User
    module.exports = mongoose.model('User', user);