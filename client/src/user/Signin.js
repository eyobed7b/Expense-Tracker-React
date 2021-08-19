import React, {useState, useEffect} from "react"
import { Link} from "react-router-dom";
import axios from 'axios'
import {useContext} from 'react'
import {GlobalCOntext}  from '../context/GolbalState'
import {Form,Button,Container,Row,Col,Card} from 'react-bootstrap'
// import { useDispatch, useSelector } from 'react-redux'
// import { login } from '../actions/userActions'



const Signin = ({ location, history }) => {

    const {userInfo, signin, loading, error} = useContext(GlobalCOntext)

    const [email, setEmail] = useState('eyobed@gmail.com')
    const [password, setPassword] = useState('12345')
    
    // const dispatch = useDispatch()

    // const userLogin = useSelector((state) => state.userLogin)
    

    // const saved = localStorage.getItem("userInfo");
    // const initialValue = JSON.parse(saved);

    useEffect(() => {
    // let user = localStorage.getItem('userInfo')
        
        if (userInfo) {
          console.log(userInfo.role)
        //     if(userInfo.role==0)
        //     history.push('/health-care-admin')
        //     else if(userInfo.role==1)

        
        history.push(`/expense-tracker`)
        // console.log("userInfo")
        }
    }, [ userInfo])

    const submitHandler = async (e) => {
        e.preventDefault()
      
        signin(email,password)
        // dispatch(login(email, password))
    }

    

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    

    const signInForm = () => (
        <Form  onSubmit={submitHandler}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={email}  onChange={(e) => setEmail(e.target.value)} />
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={password}onChange={(e) => setPassword(e.target.value)} />
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Login
  </Button>
  <div className="card-footer text-center">
                                            <div className="small"><Link to={"/signup"}>
                                               create an account</Link></div>
                                        </div>
</Form>
        
        // <form onSubmit={submitHandler} >
        //     <div className="form-group">
        //         <label className="small mb-1" htmlFor="inputEmailAddress">Email</label>
        //         <input className="form-control py-4" onChange={(e) => setEmail(e.target.value)}  type="email"
        //                placeholder="Enter email address" value={email}/>
        //     </div>
        //     <div className="form-group">
        //         <label className="small mb-1" htmlFor="inputPassword">Password</label>
        //         <input className="form-control py-4" type="password" placeholder="Enter password" value={password}
        //                onChange={(e) => setPassword(e.target.value)}/>
        //     </div>
        //     <div className="form-group">
        //         <div className="custom-control custom-checkbox">
        //             <input className="custom-control-input" id="rememberPasswordCheck" type="checkbox"/>
        //             <label className="custom-control-label" htmlFor="rememberPasswordCheck">Remember password</label>
        //         </div>
        //     </div>
        //     <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
        //         <a className="small" href="password.html">Forgot Password?</a>
        //         <button className="btn btn-primary">Login</button>
        //     </div>
        // </form>
    );

    return (
        <>
          {showError()}
         {/* {showLoading()} */}
  
  <Card>
  <Card.Header>Expense - tracker</Card.Header>
  <Card.Body>
    <Card.Title>Signin</Card.Title>
     {signInForm()}
 
  </Card.Body>
</Card>
            </>
    )
}





export default Signin