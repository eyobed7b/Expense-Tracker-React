
const Transaction = require('../modules/Transaction')

exports.getTransaction = async(req,res,next) => {
try{
  const transaction = await Transaction.find()
   return res.status(200).send({
       sucess:true,
       count:transaction.length,
       data: transaction
   })
}catch(err){
        res.status(500).send("got error")
}
res.send('Get transaction');


}

exports.addTransaction = async (req,res,next) => {
    // res.send('POST transaction');
    let transcation = new Transaction({
        text:req.body.text,
        amount:req.body.amount
    })
    try{
    let result = await transcation.save()
    res.send(result)
    }catch(err){
     if(err.name=='ValidationError'){
  let message = Object.values(err.errors).map(val => val.message)
   res.status(500).send({
       sucess:false,
       error:message
   })
     }else{
        res.status(500).send(err.name)
     }
    }
    }

    exports.deleteTransaction = async(req,res,next) => {
       let transcation =  await Transaction.findByIdAndDelete(req.params.id)
       if(!transcation)return res.status(404).send("transaction is not found");
       res.send(transcation)
        }