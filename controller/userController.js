
const User = require('../modules/user')
const { generateToken }= require ('../utils/generateToken')


exports.registerUser = async (req, res) => {
     
    const { name, email, password } = req.body

    const userExists = await User.findOne({ email })
    console.log("yes")

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        name,
        email,
        password,
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
}

exports.authUser = async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    console.log(email,password)

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
           
            token: generateToken(user._id),
        })
    } else {
        res.status(401).json("invalid email or password")
      
        throw new Error('Invalid email or passwordc')
    }
}

