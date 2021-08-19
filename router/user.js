const express = require('express')
const router = express.Router()

const {registerUser, authUser,list,deleteUser} = require('../controller/userController')

router.post('/signup',registerUser)
router.post('/signin', authUser )
router.get('/userlist', list )
router.delete('/userdelete/:id', deleteUser )


module.exports = router