import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FiChevronDown } from "react-icons/fi";
import Footer from "../../components/Footer";
import NavigationBar from "../../components/Navbar";
import HeroCards from "./HeroCards";

function HomeScreen() {
  return (
    <div className=" position-relative" style={{ zIndex: 5 }}>
      <div
        className="position-absolute bg-body-dark top-0"
        style={{ width: "100%", height: "100%", zIndex: -1 }}
      ></div>
      <div className="position-absolute bg-body-blend top-0 " />
      <NavigationBar />
      <Container>
        <main
          className="d-flex flex-column justify-content-center"
          style={{ height: "100vh" }}
        >
          <Row className="justify-content-center">
            <Col xs={8} className="mx-auto d-flex flex-column">
              <h1 className="text-center text-white display-5 fw-bolder">
                Swap your crypto tokens <br /> in{" "}
                <span className="gradient_light gradient_text">
                  JUST ONE TAP
                </span>
              </h1>
              <p className="text-center text_light">
                FibSwap is a multi-chain, decentralized exchange allowing you to
                swap tokens from one chain to another chain with the click of a
                button.{" "}
              </p>
              <div className="position-relative">
                <HeroCards />
                <div
                  className="position-absolute bg_glow_light top-50 left-50 transform-middle"
                  style={{ width: "100%", height: "100%", zIndex: -1 }}
                />
              </div>

              <div className="d-flex flex-column align-items-center pointer mt-5">
                <a
                  href="#about"
                  className="d-flex flex-column align-items-center text-decoration-none"
                >
                  <p className="text-white fs-4 text-center mb-0">Know more</p>
                  <FiChevronDown className="text-white fs-2 " />
                </a>
              </div>
            </Col>
          </Row>
        </main>

        <section id="about" className="py-5">
          <div className="my-5">
            <h2 className="text-center text-white display-6 fw-bolder">
              What is{" "}
              <span className="gradient_light gradient_text">Fibswap</span>?
            </h2>

            <p className="text-center text_light col-5 mx-auto mb-0 fw-light">
              FibSwap aims to disrupt the crypto trading world by enabling users
              to swap tokens across multiple chains using something called IMBS.
            </p>
          </div>
          <Row className='align-items-end'>
            <Col xs={6} className="pe-5">
              <h3 className="gradient_light gradient_text fw-bolder">
                We built a DEx that will disrupt crypto trading forever.
              </h3>
              <p className="text-white fs-5 opacity-75 my-4">
                The FibSwap DEX is an Interoperable Multichain Bridge System
                (IMBS) DEX which utilizes the FibSwap Smart Algorithm.
              </p>
              <p className="text-white" style={{opacity:0.7}}>
                This creates a bridge to swap tokens from one chain to another
                in one seamless, instant transaction.
                <br />
                <br />
                FibSwap will have the lowest fees on the market too with its
                unique lowest fee swap aggregator.
                <br />
                <br />
                $FIBO, is the governance token of FibSwap DEX, all fees and
                internal accounting will be in $FIBO tokens. Users of the
                platform will need $FIBO tokens to swap between chains which
                will further reduce the supply helping to increase the price
                longer term.
              </p>
            </Col>
            <Col xs={6} className="position-relative">
            <img src="/img/about.svg" width='100%' alt="" />
            <div className="logo_glow top-40 start-50 translate-middle-x" style={{top:'40%'}} />
            </Col>
          </Row>
        </section>
      </Container>

      <Footer />
    </div>
  );
}

export default HomeScreen;
