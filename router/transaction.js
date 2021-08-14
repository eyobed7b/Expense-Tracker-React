 const express = require('express')
 const router = express.Router()
 
 const {getTransaction,addTransaction,deleteTransaction}= require('../controller/transactionController')

//  router.route('/').get(getTransaction).post(addTransaction)
//  router.route('/:id').delete(deleteTransaction)

router.get('/v1/transactions/:id',getTransaction)
router.post('/v1/transactions',addTransaction)

router.delete('/v1/transactions/:id',deleteTransaction)


 module.exports = router