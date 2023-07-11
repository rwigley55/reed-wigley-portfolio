import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./SiteNav.module.css";

const SiteNav = (props) => {
  return (
    <Navbar expand="lg" className="bg-secondary p-0 sticky-top border-bottom border-3 border-primary">
        <Navbar.Toggle className="ms-auto p-1 mt-1 mb-1 b-0" aria-controls="navbar-nav" />
        <Navbar.Collapse style={{color: 'yellow'}} className="" id="navbar-nav">
          <Nav className="ms-auto p-0 b-0">
            <Nav.Link className={`${styles.small} text-primary text-lowercase p-1 ms-auto`} href="#home">
              Home
            </Nav.Link>
            <Nav.Link className={`${styles.small} text-primary text-lowercase p-1 ms-auto`} href="#link">
              About
            </Nav.Link>
            <Nav.Link className={`${styles.small} text-primary text-lowercase p-1 ms-auto`} href="#link">
              Portfolio
            </Nav.Link>
            <Nav.Link className={`${styles.small} text-primary text-lowercase p-1 ms-auto`} href="#link">
              Contact
            </Nav.Link>
            <Nav.Link
              className={`${styles.small} text-lowercase text-primary-emphasis p-1 ms-auto`}
              href="#link"
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

    </Navbar>
  );
};

export default SiteNav;
