import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../../vectors/Logo";
import { FiMail } from "react-icons/fi";
import MailIcon from "../../vectors/Icons/MailIcon";
import TelegramIcon from "../../vectors/Icons/TelegramIcon";
import InstaIcon from "../../vectors/Icons/InstaIcon";

function Footer() {
  return (
    <div
      style={{
        mixBlendMode: "normal",
        borderTop: "2px solid rgba(255, 255, 255, 0.25)",
      }}
      className="py-5"
    >
      <Container>
        <Row>
          <Col>
            <div className="text-white opacity-75 d-flex gap-4 fs-6 pt-5">
              <p>Projects</p>
              <p>Policy</p>
              <p>Terms and Condition</p>
            </div>
          </Col>
          <Col xs={4}>
            <div className="d-flex flex-column align-items-center">
              <Logo />
              <p className="text-white opacity-75 text-center">
                Lorem Ipsum Dolor Ist Lorem Ipsum Dolor IstLorem Ipsum Dolor Ist
                Lorem Ipsum{" "}
              </p>
            </div>
          </Col>
          <Col>
            <div className="d-flex gap-3 pt-5 justify-content-end">
              <p className="text-white opacity-75">Contact:</p>
              <MailIcon />
              <TelegramIcon />
              <InstaIcon />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
