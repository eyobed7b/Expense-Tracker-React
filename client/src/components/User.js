
import {useContext} from 'react'
import {GlobalCOntext} from '../context/GolbalState'
export const User= ({user}) => {
    
    const{deleteUser ,userInfo} = useContext(GlobalCOntext)
     
    return (
        <li >
        {user.name} <button onClick={()=>deleteUser(user._id, userInfo)}  className="delete-btn">x</button>
       </li>
    )
}

  
export default User;