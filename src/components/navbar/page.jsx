"use client";
import Image from "next/image";
import styles from "./navbar.module.css";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";

const AppBar = () => {
  return (
    <div className={styles.container}>
      <Navbar expand="sm" className="w-100">
        <Container>
          <Navbar.Brand className={styles.name} href="/">
            SWIFTIESOFT
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar-expand-sm"
            className={styles.toggle}
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-sm"
            aria-labelledby="offcanvasNavbarLabel-expand-sm"
            placement="start"
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <div className={styles.links}>
                  <Nav.Link href="/" className={styles.link}>
                    Home
                  </Nav.Link>
                  <Nav.Link href="/about" className={styles.link}>
                    About
                  </Nav.Link>
                  <Nav.Link href="/service" className={styles.link}>
                    Services
                  </Nav.Link>
                  <Nav.Link href="/team" className={styles.link}>
                    Teams
                  </Nav.Link>
                  <Nav.Link href="/contact" className={styles.link}>
                    Contact
                  </Nav.Link>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppBar;
