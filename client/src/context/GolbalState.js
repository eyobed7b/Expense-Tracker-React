import React ,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

const initialState ={
    transaction:[
       
        ],
        error:null,
        loading:true
}

export const GlobalCOntext = createContext(initialState)

export const GlobalProvider = ({children})=>{
    const [state , dispatch] = useReducer(AppReducer,initialState)

    async function getTransaction (){
         try{
            const res = await axios.get('/api/v1/transactions')
            dispatch({
                type:"GET_TRANSACTION",
                payload:res.data.data
            })
         }catch(err){
            dispatch({
                type:"TRANSACTION_ERROR",
                payload:err.response.data.error
            })
         }
     }

    async function deleteTransaction (id){
    
        try{
            await axios.delete(`/api/v1/transactions/${id}`)
            dispatch({
                type:"DELETE_TRANSACTION",
                payload:id
            })
         }catch(err){
            dispatch({
                type:"TRANSACTION_ERROR",
                payload:err.response.data.error
            })
         }
        
    }
   async function addTransaction (transaction){
       const config ={
           headers:{
               "Content-Type":"application/json"
           }
       }
       try{
           const res = await axios.post('/api/v1/transactions',transaction,config)
    
        dispatch({
            type:"ADD_TRANSACTION",
            payload:res.data

        })
       
       }
       catch(err){
        dispatch({
            type:"TRANSACTION_ERROR",
            payload:err 
        })
       }
  
        
    }

return (<GlobalCOntext.Provider  value={{
    transaction:state.transaction,
    error:state.error,
    loading:state.loading,
    getTransaction,
    deleteTransaction,
    addTransaction
}}>{children}</GlobalCOntext.Provider>);
}