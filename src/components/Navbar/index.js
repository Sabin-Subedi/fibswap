import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../../vectors/Logo";

function NavigationBar() {
  return (
    <div>
      <Navbar bg="transparent" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <span style={{ width: "3rem" }}>
              <Logo width="164" height="80" />
            </span>
          </Navbar.Brand>
          <Nav className="mx-auto gap-3">
            <Nav.Link href="#home">What is FibSwap?</Nav.Link>
            <Nav.Link href="#features">Stats</Nav.Link>
            <Nav.Link href="#pricing">Resources</Nav.Link>
            <Nav.Link href="#pricing">Apps</Nav.Link>
          </Nav>
          <Nav>
            <button className="bg-transparent border-0">
              <div className="position-relative">
                <div className="gradient_light  px-4 py-2 rounded" style={{opacity:0.2}}>
                  <p className="mb-0 fw-bold fs-5 invisible">Launch DEx </p>
                </div>
                <p
                  className="mb-0 opacity-100 fw-bold  gradient_light gradient_text position-absolute top-50 start-50 translate-middle text-center"
                  style={{ width: "100%" }}
                >
                  Launch DEx
                </p>
              </div>
            </button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
