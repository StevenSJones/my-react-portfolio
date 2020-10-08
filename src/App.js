import React from 'react';
import './App.css';
import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer";
import { Nav, Navbar, NavLink, NavItem, NavDropdown } from "react-bootstrap/";

// use <></> as the new way for declaring fragments. The old way: <React.Fragment></React.Fragment>. Can also place between a <div></div> tag but that creates a new element in the DOM. Use <></>
function App() {
    return (
    <>
    <Header />
    <Project />
    <Footer />
    </>
    )
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
