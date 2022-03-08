import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import Test from './Test';
import HelloComponent from './HelloComponent';
import reportWebVitals from './reportWebVitals';
import Form from './Form';


const Hello = () => {
  //return <p>Hello</p>;
  return <div>
  <header className="Main-page">
    <h1>
      <marquee direction="right">Hello Sela Aulia Siswanto !!! Selamat Datang di React JS</marquee>    
    </h1>
  </header>
</div>
};

// function HelloComponent(){
//   return HelloComponent
// }

class StateFullComponent extends React.Component{
  render(){
    return<p>StateFullComponent</p>
  }
}

ReactDOM.render(<Form />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
