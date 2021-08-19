
export default (state,action)=>{
    switch(action.type){
        
        case 'GET_USERS':
             console.log("yes")
              return{
                  
                  ...state,
                  users: action.payload 
              }
              case 'GET_USERS_ERROR':
                  
                  return{
                      ...state,
                      error: action.payload
                  }
        case 'SIGNUP':
          //  console.log("yes")
            return{
                
                ...state,
                userInfo: action.payload 
            }
            case 'SIGNIN_ERROR':
                
                return{
                    ...state,
                    error: action.payload
                }

        case 'SIGNIN':
            
            return{
                
                ...state,
      userInfo: action.payload 
             
            }
            case 'SIGNIN_ERROR':
                 
                
                return{
                    ...state,
                    error: action.payload
                }
        case 'GET_TRANSACTION':
            return{
                ...state,
                loading:false,
                transaction:action.payload
            }
            case 'TRANSACTION_ERROR':
                return{
                    ...state,
                    error:action.payload
                }
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transaction:state.transaction.filter(transaction=>transaction._id!==action.payload)
            }
            case 'USER_DELETE':
                return{
                    ...state,
                    users:state.users.filter(user=>user._id!==action.payload)
                }
         case 'ADD_TRANSACTION':
             return{
                 ...state,
                 transaction:[...state.transaction,action.payload]
             }   
        default:
            return state
    }
}