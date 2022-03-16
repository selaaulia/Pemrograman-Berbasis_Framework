import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BlogPost from './container/BlogPost/BlogPost';
import ListMahasiswa from './container/mahasiswa/ListMahasiswa';

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

ReactDOM.render(<ListMahasiswa />, document.getElementById("content"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
