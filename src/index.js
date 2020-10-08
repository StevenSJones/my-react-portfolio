import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';I also ran npm install react-bootstrap bootstrap
 
//index.js is the entry file; the main file to be redered; generated. 

//reactDom render method: takes in our component (<App/>) and our container ('root')
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change.
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
