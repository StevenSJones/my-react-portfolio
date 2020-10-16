import React from "react";
import { Nav, Container, Row, Col, Button } from "react-bootstrap";

//react router dom is imported so that <Router> and <Switch> can be used here and in the Header.js because it houses the buttons.

export default function Header(props) {
  return <Navigation />;
}

function Navigation() {
  return (
    <Container className="container-center">
      <Row>
        <Col>
          <Nav className="color-nav">
            <Nav.Item>
              <Button className="blended-button">
                <Nav.Link href="/"> Home </Nav.Link>
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button className="blended-button">
                <Nav.Link href="/introduction"> Introduction </Nav.Link>
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button className="blended-button">
                <Nav.Link href="/resources"> Resources </Nav.Link>
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button className="blended-button">
                <Nav.Link href="/gallery"> Gallery </Nav.Link>
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button className="blended-button">
                <Nav.Link
                  href="https://docs.google.com/document/d/1F2dCpsvhm61QUFytpRKljhzXUwQ5rVIVUXNMZwSVz9U/edit?usp=sharing"
                  target="_blank"
                >
                  Resume
                </Nav.Link>
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button className="blended-button">
                <Nav.Link
                  href="https://github.com/StevenSJones"
                  target="_blank"
                >
                  Github
                </Nav.Link>
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button className="blended-button">
                <Nav.Link
                  href="https://www.linkedin.com/in/steven-j-285a33115"
                  target="_blank"
                >
                  LinkedIn
                </Nav.Link>
              </Button>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}
