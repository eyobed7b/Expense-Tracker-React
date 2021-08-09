import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "./Routes";
import {GlobalProvider } from './context/GolbalState'
import App from './App';


ReactDOM.render(
  <React.StrictMode>
        <GlobalProvider  >
        <Routes/>
        </GlobalProvider>
    
    {/* <App /> */}

  </React.StrictMode>,
  document.getElementById('root')
);
 
