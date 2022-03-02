import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
// import HelloWorld from './components/HelloWorld';
// import Login from './components/Login'
// import Register from './components/Register'
// import Headers from './components/Headers'
import ForgetPassword from './Assignment/ForgetPassword'

ReactDOM.render(
  <React.StrictMode>
    <ForgetPassword />
  </React.StrictMode>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
