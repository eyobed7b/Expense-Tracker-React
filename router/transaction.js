 const express = require('express')
 const router = express.Router()
 
 const {getTransaction,addTransaction,deleteTransaction}= require('../controller/transactionController')
 const { protect } = require('../middleware/authMiddleware')
//  router.route('/').get(getTransaction).post(addTransaction)
//  router.route('/:id').delete(deleteTransaction)

router.get('/v1/transactions/:id',protect,getTransaction)
router.post('/v1/transactions',protect,addTransaction)

router.delete('/v1/transactions/:id',protect,deleteTransaction)


 module.exports = router