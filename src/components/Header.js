import React from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap/";

export default function Header(props) {
  return <Navigation />;
}

function Navigation() {
  return (
    <>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        text="light"
      >
        <Navbar.Brand href="#home">Welcome</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">About Me</Nav.Link>
            <Nav.Link href="#pricing">Skills</Nav.Link>
            <Nav.Link href="#pricing">Gallery</Nav.Link>
            <NavDropdown title="More Below" id="collasible-nav-dropdown">
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1">Resume</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">GITHUB</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">LinkedIn</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
