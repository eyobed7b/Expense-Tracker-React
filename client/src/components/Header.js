import {GlobalCOntext}  from '../context/GolbalState'
 
import {useContext} from 'react'
import React, {useState, useEffect} from "react"
import { useHistory } from 'react-router'
import {withRouter} from 'react-router-dom';
 
const Header = ( ) => {
  const {userInfo,signout} = useContext(GlobalCOntext)
  let history = useHistory();

   
  useEffect(() => {
    // let user = localStorage.getItem('userInfo')
    
       
        //     if(userInfo.role==0)
        //     history.push('/health-care-admin')
        //     else if(userInfo.role==1)

        console.log(userInfo)
        if(!userInfo)
        console.log("yes")
          //  history.push(`/`)
       
        
        // console.log("userInfo")
       
    }, [ userInfo])


  const activateLasers =( e)=>{
              
    e.preventDefault();
    signout()
    

    


}

    return (
      <>
        <div  className="inc-exp-container">
        <h2>
          Expense Tracker  
       
        </h2>

        <buttun onClick={activateLasers} className="btn">
         
          signout
           
          
        </buttun>
        </div>
       
        <div className="inc-exp-container">
          
         <p>Name {  JSON.parse( userInfo).name} </p>
        </div>
</>
    )
}

export default Header
