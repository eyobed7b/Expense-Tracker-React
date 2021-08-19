import React,{useContext,useEffect} from 'react'
import {GlobalCOntext} from '../context/GolbalState'
import User from './User'
const Admin = () => {
 
    const {users,getUsers,userInfo} = useContext(GlobalCOntext)
    // let user =  JSON.parse( userInfo)
 
     useEffect(()=>{
        getUsers( userInfo)
     },[]); 
    return (
        <>
            <h4>Admin</h4>
            <ul   className="list">
      {users.map((user)=>( <User key={user._id} user={user} />))}
      </ul>
     
        </>
    )
}

export default Admin
