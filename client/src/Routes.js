import React from "react"
import { BrowserRouter , Switch, Route } from 'react-router-dom';
 
 
import Signup from './user/Signup';
import Signin from './user/Signin';
import main from './App'
 



const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/signup" exact component={Signup} />
                <Route path="/" exact component={Signin} />
                <Route path="/expense-tracker" exact component={main} />
            </Switch>
        </BrowserRouter>
    )
}


export default Routes;