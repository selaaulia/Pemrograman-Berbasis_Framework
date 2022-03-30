import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import AuthExample from './Auth';
import NestingExample from './Nesting';
import ParamsExample from './Params';
import Marketplace from './Marketplace/Marketplace';

ReactDOM.render(
  // <App/>,
  // <ParamsExample/>,
  // <NestingExample/>,
  // <AuthExample/>,
  <Marketplace/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
