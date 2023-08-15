import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./SiteNav.module.css";

const SiteNav = (props) => {
  return (
    <Navbar
      expand="lg"
      className="bg-secondary p-0 sticky-top border-bottom border-3 border-primary"
    >
      <Navbar.Toggle className="ms-auto p-1 b-0" aria-controls="navbar-nav" />
      <Navbar.Collapse className="" id="navbar-nav">
        <Nav className="ms-auto p-0 b-0">
          <Nav.Link
            className={`${styles.small} text-primary text-lowercase p-1 ms-auto`}
            href="#home"
          >
            Home
          </Nav.Link>
          <Nav.Link
            className={`${styles.small} text-primary text-lowercase p-1 ms-auto`}
            href="#about"
          >
            About
          </Nav.Link>
          <Nav.Link
            className={`${styles.small} text-primary text-lowercase p-1 ms-auto`}
            href="#portfolio"
          >
            Portfolio
          </Nav.Link>
          <Nav.Link
            className={`${styles.small} text-primary text-lowercase p-1 ms-auto`}
            href="#contact"
          >
            Contact
          </Nav.Link>
          <Nav.Link
            className={`${styles.small} text-lowercase text-secondary-emphasis p-1 ms-auto`}
            href="https://rwigley55.github.io/resume/"
            target="_blank"
          >
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default SiteNav;
