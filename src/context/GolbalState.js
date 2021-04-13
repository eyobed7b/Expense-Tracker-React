import React ,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer'

const initialState ={
    transaction:[
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
        ]
}

export const GlobalCOntext = createContext(initialState)

export const GlobalProvider = ({children})=>{
    const [state , dispatch] = useReducer(AppReducer,initialState)
    function deleteTransaction (id){
        dispatch({
            type:"DELETE_TRANSACTION",
            payload:id

        })
        
    }
    function addTransaction (transaction){
        dispatch({
            type:"ADD_TRANSACTION",
            payload:transaction

        })
        
    }

return (<GlobalCOntext.Provider  value={{
    transaction:state.transaction,
    deleteTransaction,
    addTransaction
}}>{children}</GlobalCOntext.Provider>);
}