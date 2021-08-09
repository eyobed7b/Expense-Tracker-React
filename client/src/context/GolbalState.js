import React ,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

const initialState ={
    transaction:[
       
        ],
        error:null,
        loading:true,
        userInfo:null
}

export const GlobalCOntext = createContext(initialState)

export const GlobalProvider = ({children})=>{
    const [state , dispatch] = useReducer(AppReducer,initialState)
    async function signup (name,email,password){
        const  API = "http://localhost:5000/api"
        console.log(name+email+password)
         try{
            
 
        
             console.log("yes")
             const config = {
                 headers: {
                     'Content-Type': 'application/json',
                     // 'Access-Control-Allow-Origin' : 'http://localhost:5000/api/signin',
                     
                 },
             }
     
             const {data} = 
             await axios.post(
                 `${API}/signup`,
                 {name,email, password},
                 config
             )
             console.log(data)
             
             dispatch({
                 type:"SIGNIN",
                 payload: data
             })
          }catch(err){
             dispatch({
                 type:"SIGNUP_ERROR",
                 payload: err.response && err.response.data.message
                 ? err.response.data.message
                 : err.message
             })
          }
 
      }
 
  

    async function signin (email,password){
       const  API = "http://localhost:5000/api"
        try{
           

       
            console.log("yes")
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    // 'Access-Control-Allow-Origin' : 'http://localhost:5000/api/signin',
                    
                },
            }
    
            const {data} = 
            await axios.post(
                `${API}/signin`,
                {email, password},
                config
            )
            console.log(data)
            
            dispatch({
                type:"SIGNIN",
                payload: data
            })
         }catch(err){
            dispatch({
                type:"SIGNIN_ERROR",
                payload: err.response && err.response.data.message
                ? err.response.data.message
                : err.message
            })
         }

     }

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
    userInfo:state.userInfo,
    signup,
    signin,
    getTransaction,
    deleteTransaction,
    addTransaction
}}>{children}</GlobalCOntext.Provider>);
}