import React from "react";
import { Link } from "react-router-dom";
//react router dom is imported so that <Router> and <Switch> can be used here and in the Header.js because it houses the buttons.

export default function Header(props) {
  return <Navigation />;
}

function Navigation() {
  return (
    <>
<nav className="color-nav" sticky="top">
<Link to="/">| Home |</Link>
<Link to="/introduction">Introduction |</Link>
<Link to="/resources">Resources |</Link>
<Link to="/gallery">Gallery |</Link>
<Link to="./resume.html"> Resume |</Link>
<Link to="/https://github.com/StevenSJones"> Github |</Link>
<Link to="/https://www.linkedin.com/in/steven-j-285a33115"> LinkedIn |</Link>

</nav>
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
