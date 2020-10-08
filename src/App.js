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
      <Container bg="dark" text="info">
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
      <Project />
      <Footer />
    </>
  );
}

export default App;
