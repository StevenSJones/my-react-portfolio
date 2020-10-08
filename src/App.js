import React from "react";
import "./App.css";
import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer";
import { Container, Row, Col } from "react-bootstrap/";

// use <></> as the new way for declaring fragments. The old way: <React.Fragment></React.Fragment>. Can also place between a <div></div> tag but that creates a new element in the DOM. Use <></>
function App() {
  return (
    <>
      <Header />
      <Container className="color-welcome container-center justify-content-center one-hundred-wide">
        <Row className="row-center">
          <Col className="justify-content-center">
            React Portfolio
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            by Steven Jones
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
          </Col>
        </Row>
      </Container>
      <Project />
      <Footer />
    </>
  );
}

export default App;
