import React from "react";
import Project from "../components/Project";
import { Container, Row, Col } from "react-bootstrap";

function Gallery(props) {
  return (
    <Container>
      <Row>
        <Col>
          <Project
            title="Burger App"
            description="burger app description"
            src="./assets/images/burgerSS.jpg"
            url="https://intense-castle-15409.herokuapp.com/"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Gallery;
