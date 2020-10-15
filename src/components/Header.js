import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
//react router dom is imported so that <Router> and <Switch> can be used here and in the Header.js because it houses the buttons.

export default function Header(props) {
  return <Navigation />;
}

function Navigation() {
  return (
    <>
      <Nav className="color-nav" sticky="top">
        <Nav.Item>
          <Link to="/">| Home |</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/introduction">Introduction |</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/resources">Resources |</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/gallery">Gallery |</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="./resume.html"> Resume |</Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://github.com/StevenSJones" target="_blank"> Github |</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://www.linkedin.com/in/steven-j-285a33115" target="_blank">
            {" "}
            LinkedIn |
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {/* <div className="container">
        <Navbar className="color-nav" sticky="top" collapseOnSelect expand="lg">
          <div className="row">
            <div className="col">
              <Navbar.Brand href="/">
                <h3 className="text-shadow-light-font-light">Welcome</h3>
              </Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/introduction">
                  <h3 className="col text-shadow-light-font-light">
                    Introduction
                  </h3>
                </Nav.Link>
                <Nav.Link href="/skills">
                  <h3 className="col text-shadow-light-font-light">
                    Resources
                  </h3>
                </Nav.Link>

                <Nav.Link href="/gallery">
                  <h3 className="col text-shadow-light-font-light">Gallery</h3>
                </Nav.Link>
                <div className="col justify-content-center">
                  <NavDropdown
                    className="text-shadow-light-font-light"
                    title="More Below"
                    id="collasible-nav-dropdown"
                  >
                    <NavDropdown.Item href="./resume.html">
                      <h1
                        className="link-text text-shadow-dark"
                        target="_blank"
                      >
                        Resume
                      </h1>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="https://github.com/StevenSJones">
                      <h1
                        className="link-text text-shadow-dark"
                        target="_blank"
                      >
                        GITHUB
                      </h1>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="https://www.linkedin.com/in/steven-j-285a33115">
                      <h1
                        className="link-text text-shadow-dark"
                        target="_blank"
                      >
                        LinkedIn
                      </h1>
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div> */}
    </>
  );
}
