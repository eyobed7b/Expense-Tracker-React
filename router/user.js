const express = require('express')
const router = express.Router()

const {registerUser, authUser} = require('../controller/userController')

router.post('/signup',registerUser)
router.post('/signin', authUser )

module.exports = router