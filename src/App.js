import React from "react";
import "./App.css";
import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Skills from "./pages/Skills";
import Introduction from "./pages/Introduction";
import { Container, Row, Col } from "react-bootstrap/";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// use <></> as the new way for declaring fragments. The old way: <React.Fragment></React.Fragment>. Can also place between a <div></div> tag but that creates a new element in the DOM. Use <></>
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/introduction">
            <Introduction />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
        </Switch>
        <Project />
        <Footer />
      </Router>
    </>
  );
}

export default App;
