import React from "react";

export default function Header(props) {
  return <Navigation />
}

function Navigation() {
  return (
    <nav
      className="container d-flex navbar navbar-expand-md navbar-dark fixed-top bg-dark one-hundred-wide"
    >
      <div className="leftWhite">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdown01"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Github | LinkedIn | Resume
            </a>
            <div
              className="dropdown-menu text-primary"
              aria-labelledby="dropdown01"
            >
              <a
                className="dropdown-item text-primary"
                href="https://github.com/StevenSJones"
                target="_blank"
              >
                My Github repository &raquo;
              </a>
              <a
                className="dropdown-item text-primary"
                href="https://www.linkedin.com/in/steven-j-285a33115"
                target="_blank"
              >
                My LinkedIn Page &raquo;
              </a>
              <a
                className="dropdown-item text-primary"
                href="./resume.html"
                target="_blank"
              >
                My Resume &raquo;
              </a>
            </div>
          </li>
        </ul>
        <div id="textright" className="my-2 my-lg-0 text-primary">
          <span>(303) 880-9518</span>
          <br />
          <span>ssjones.code@gmail.com</span>
          <br />
          <span>
            <a className="anvil" href="index.html" target="_blank">
              About Me |{" "}
            </a>
            <a className="anvil" href="skills.html" target="_blank">
              Skills Acquired |
            </a>
            <a className="anvil" href="gallery.html" target="_blank">
              Gallery{" "}
            </a>
          </span>
        </div>
      </div>
      </div>
    </nav>
  );
}
