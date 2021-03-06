import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Resources from "./pages/Resources";
import Introduction from "./pages/Introduction";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//react router dom is imported so that <Router> and <Switch> can be used here and in the Header.js because it houses the buttons.

// use <></> as the new way for declaring fragments. The old way: <React.Fragment></React.Fragment>. Can also place between a <div></div> tag but that creates a new element in the DOM. Use <></>
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/introduction">
            <Introduction />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
