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
      <Navbar className="color-nav"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Navbar.Brand href="#home"><h3 className="text-center text-shadow-light-font-light">Welcome</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features"><h3 className="text-shadow-light-font-light">About Me</h3></Nav.Link>
            <Nav.Link href="#pricing"><h3 className="text-shadow-light-font-light">Skills</h3></Nav.Link>
            <Nav.Link href="#pricing"><h3 className="text-shadow-light-font-light">Gallery</h3></Nav.Link>
            <NavDropdown className="text-shadow-light-font-light" title="More Below" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><h1 className="link-text text-shadow-dark">Resume</h1></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"><h1 className="link-text text-shadow-dark">GITHUB</h1></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><h1 className="link-text text-shadow-dark">LinkedIn</h1></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
