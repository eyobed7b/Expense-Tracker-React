import React ,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

const initialState ={
    transaction:[
       
        ],
        error:null,
        loading:true,
        userInfo:null,
        users:[]
}

export const GlobalCOntext = createContext(initialState)

export const GlobalProvider = ({children})=>{
    const [state , dispatch] = useReducer(AppReducer,initialState)
    async function signup (name,email,password){
        const  API = "http://localhost:5000/api"
        console.log(name+email+password)
         try{
            
 
        
            
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
           
             localStorage.setItem('userInfo', JSON.stringify(data))
             dispatch({
                 type:"SIGNUP",
                 payload: data
             })
            
          }catch(err){
            console.log(err.message)
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
           

       
           // console.log("yes")
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
         localStorage.setItem('userInfo', JSON.stringify(data))
        //    console.log(state.userInfo)
            
            dispatch({
                type:"SIGNIN",
                payload: data
            })
           


         }catch(err){
            console.log(err.message)
            dispatch({
                type:"SIGNIN_ERROR",
                payload: err.response && err.response.data.message
                ? err.response.data.message
                : err.message
            })
         }
       

     }
     async function signout (email,password){
    
       localStorage.removeItem('userInfo')
       document.location.href = '/'
 
      }

    async function getTransaction (userInfo){
        
         try{
            console.log("userInfo")
           let user = JSON.parse( userInfo)
           
               
           const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}`,
                    // 'Access-Control-Allow-Origin' : 'http://localhost:5000/api/signin',
                    
                },
            }
            const res = await axios.get('/api/v1/transactions/'+user['_id'], config)
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

     async function getUsers(userInfo){
        const  API = "http://localhost:5000/api"
        try{
           console.log("userInfo")
          let user = JSON.parse( userInfo)
          
              
          const config = {
               headers: {
                   'Content-Type': 'application/json',
                   Authorization: `Bearer ${user.token}`,
                   // 'Access-Control-Allow-Origin' : 'http://localhost:5000/api/signin',
                   
               },
           }
           const res = await axios.get(`${API}/userlist` )
           console.log(res.data)
           dispatch({
               type:"GET_USERS",
               payload:res.data
           })
        }catch(err){
           dispatch({
               type:"GET_USERS_ERROR",
               payload:err.response.data.error
           })
        }
    }
    async function deleteUser (id,userInfo){
        let user = JSON.parse( userInfo)
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.token}`,
                // 'Access-Control-Allow-Origin' : 'http://localhost:5000/api/signin',
                
            },
        
        }
    
        try{
            await axios.delete(`/api/userdelete/${id}`,config)
            dispatch({
                type:"USER_DELETE",
                payload:id
            })
         }catch(err){
            dispatch({
                type:"USER_DELETE_ERROR",
                payload:err.response.data.error
            })
         }
        
    }
 
    async function deleteTransaction (id,userInfo){
        let user = JSON.parse( userInfo)
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.token}`,
                // 'Access-Control-Allow-Origin' : 'http://localhost:5000/api/signin',
                
            },
        
        }
    
        try{
            await axios.delete(`/api/v1/transactions/${id}`,config)
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
   async function addTransaction (transaction,userInfo){
    let user = JSON.parse( userInfo)
           
       const config ={
           headers:{
               "Content-Type":"application/json",
               Authorization: `Bearer ${user.token}`,
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
    userInfo:localStorage.getItem('userInfo'),
    users:state.users,
    getUsers,
    signup,
    signin,
    signout,
    getTransaction,
    deleteTransaction,
    deleteUser,
    addTransaction
}}>{children}</GlobalCOntext.Provider>);
}