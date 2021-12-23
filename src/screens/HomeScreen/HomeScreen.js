import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FiChevronDown } from "react-icons/fi";
import Footer from "../../components/Footer";
import NavigationBar from "../../components/Navbar";
import InstaIcon from "../../vectors/Icons/InstaIcon";
import MailIcon from "../../vectors/Icons/MailIcon";
import TelegramIcon from "../../vectors/Icons/TelegramIcon";
import LogoShape from "../../vectors/LogoShape";
import HelpCards from "./HelpCards";
import HeroCards from "./HeroCards";
import "./Homescreen.css";

function HomeScreen() {
  return (
    <div className=" position-relative" style={{ zIndex: 5 }}>
      <div
        className="position-absolute bg-body-dark top-0 -z-1"
        style={{ width: "100%", height: "100%" }}
      ></div>
      <div
        className="position-absolute bg-body-blend top-0"
        style={{ zIndex: -1 }}
      />
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
          <div className="my-5 pt-5">
            <h2 className="text-center text-white display-6 fw-bolder">
              What is{" "}
              <span className="gradient_light gradient_text">Fibswap</span>?
            </h2>

            <p className="text-center text_light col-5 mx-auto mb-0 fw-light">
              FibSwap aims to disrupt the crypto trading world by enabling users
              to swap tokens across multiple chains using something called IMBS.
            </p>
          </div>
          <Row className="align-items-end">
            <Col xs={6} className="pe-5">
              <h3 className="gradient_light gradient_text fw-bolder">
                We built a DEx that will disrupt crypto trading forever.
              </h3>
              <p className="text-white fs-5 opacity-75 my-4">
                The FibSwap DEX is an Interoperable Multichain Bridge System
                (IMBS) DEX which utilizes the FibSwap Smart Algorithm.
              </p>
              <p className="text-white" style={{ opacity: 0.7 }}>
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
              <img src="/img/about.svg" width="100%" alt="" />
              <div
                className="logo_glow top-40 start-50 translate-middle-x"
                style={{ top: "40%" }}
              />
            </Col>
          </Row>
        </section>

        <section className="py-5">
          <div className="my-5 py-5 ">
            <h2 className="text-center text-white display-6 fw-bolder gradient_light gradient_text">
              How We Help?
            </h2>

            <p className="text-center text_light col-6 mx-auto mb-0 fw-light mb-5">
              FibSwap provides a great value proposition to users of the
              platform and to token holders which should provide the network
              effect needed for mass adoption. One of the main questions we
              should all be asking when evaluating projects is what problem does
              this project solve?
            </p>
          </div>
          <HelpCards />
        </section>

        <section className="py-5">
          <div className="my-5 pt-5  ">
            <h2 className="text-center text-white display-6 fw-bolder gradient_light gradient_text">
              White Paper
            </h2>

            <p className="text-center text_light col-8 mx-auto mb-0 fw-light mb-5">
              Our whitepaper is a dynamic document. As opposed to a static
              document we are constantly updating the whitepaper with the most
              up to date information.
            </p>
          </div>

          <div className="position-relative mb-5 col-3  mx-auto  bg-transparent d-flex flex-column align-items-center px-4 pb-2">
            <div className="position-absolute w-full h-full card_blue_gradient -z-1" />
            <div style={{ marginTop: "-3rem" }}>
              <LogoShape height="250" />
            </div>
            <h2
              className="gradient_light gradient_text fw-bolder fs-1"
              style={{ marginTop: "-2.5rem" }}
            >
              Fibswap
            </h2>

            <div className="text-center mt-5 ">
              <p className="mb-0 fw-light text-white opacity-50 fs-5">
                White Paper
              </p>
              <p className="mb-0 text-white fw-bolder fs-6">Version 5.0</p>
              <p className="mb-0 text_light">July 2021</p>

              <h5 className="mt-4 text-white">
                Decentralized Finance One Click Cross Platform Swaps
              </h5>
            </div>
            <p className="gradient_text gradient_light mt-5">
              https://fibswap.io
            </p>
          </div>

          <button className="bg-transparent mt-4 border-0 d-block position-relative col-4 mx-auto">
            <div
              className="gradient_light  px-4 py-2 rounded"
              style={{ opacity: 0.2 }}
            >
              <p className="mb-0 fw-bold fs-4 invisible">
                View The Whitepaper{" "}
              </p>
            </div>
            <p className="mb-0 opacity-100 fw-bold fs-4  gradient_light gradient_text position-absolute top-50 start-50 translate-middle text-center w-full">
              View The Whitepaper
            </p>
          </button>
        </section>

        <section className='py-5'>
          <div className="my-5 pt-5  ">
            <h2 className="text-center text-white display-6 fw-bolder gradient_light gradient_text ">
              Enjoy Your Privacy
            </h2>

            <p className="text-center text_light col-8 mx-auto mb-0 fw-light mb-5">
              As part of FibSwap’s core commitment to providing a secure DEX
              experience for our users, we will continually update and review
              our audit opinions and are in talks with several auditors prior to
              launch of V1.0 of the FibSwap DEx.
            </p>
          </div>
          <Row className="align-items-center">
            <Col xs={6} className="px-5 d-flex">
              <img
                src="/img/fingerprint.svg"
                className="mx-auto"
                width="90%"
                alt=""
              />
            </Col>
            <Col xs={6} className="text_light opacity-75 fs-6">
              <h2 className="card_border gradient_text fw-bold d-inline-block">
                Commitment
              </h2>
              <p className="fs-6">
                Our commitment to maintaining a secure, safe and reliable
                platform form part of the core values of FibSwap. To ensure
                this, we have commissioned several Audits from various companies
                to continually review our process to protect our users and our
                platform from external exploits and vulnerabilities.
                <br /> <br />
                We are delighted to announce that the first of these audits have
                been completed by TechRate and we are proud to tell you that we
                have passed with flying colours.
              </p>
            </Col>
          </Row>
        </section>

        <section className='py-5'>
          <div className="my-5 pt-5  ">
            <h2 className="text-center text-white display-6 fw-bolder gradient_light gradient_text ">
              Token Distribution
            </h2>

            <p className="text-center text_light col-8 mx-auto mb-0 fw-light mb-5">
              At FibSwap we want to be as transparent as possible and give you
              all the information on how we have allocated the original 10
              Billion FIBO tokens.
            </p>
          </div>
          <Row className="align-items-center">
            <Col xs={6} className="text_light opacity-75 fs-6">
              <h2 className="card_border gradient_text fw-bold d-inline-block">
                Token Stats
              </h2>
              <p className="fs-6">
                Total supply After 500 million Burn: 9,500,000,000 (9.5 billion)
                <br />
                Locked Liquidity: 1,000,000,000 (1 billion)
                <br />
                <br />
                Tokens Locked for 1 year: 2,436,000,000 (2.436 billion)
                <br />
                <br />
                Master Wallet Locked Monthly: 2,390,000,000 (2bil and 390
                million FUTURE BURNING WALLET)
                <br />
                <br />
                Current Circulating Supply: 3,674,000,000 (3.674 billion)
              </p>
            </Col>
            <Col xs={6} className="ps-5 d-flex">
              <img
                src="/img/token_distri.svg"
                className="ms-auto"
                width="80%"
                alt=""
              />
            </Col>
          </Row>
        </section>

        <section className='py-5 mb-5'>
          <div className="my-5 pt-5  ">
            <h2 className="text-center text-white display-6 fw-bolder gradient_light gradient_text ">
              Contact Us
            </h2>

            <p className="text-center text_light col-8 mx-auto mb-0 fw-light mb-5">
              Have questions? We’re happy to help.
            </p>
          </div>
          <Row className="align-items-center">
            <Col xs={6} className="ps-5 d-flex">
              <img
                src="/img/contact.svg"
                className="me-auto"
                width="60%"
                alt=""
              />
            </Col>
            <Col xs={6} className="text_light opacity-75 fs-6 ps-5">
              <h2 className="card_border gradient_text fw-bold d-inline-block">
                Ask Questions
              </h2>
              <p className="fs-6 mb-0">
                You can ask us a question anytime in our various social media
                channels, our admin team, marketing team, developer team and the
                owner regularly hold live voice chat AMAs in our Telegram group.
              </p>
              <div className="d-flex gap-3 mt-5">
                <MailIcon />
                <TelegramIcon />
                <InstaIcon />
              </div>
            </Col>
          </Row>
        </section>

        <section className='py-5 mb-5'>
          <Row>
            <Col xs={3}>
              <img src="/img/instacoin.svg" width="70%" alt="" />
            </Col>
            <Col>
              <h2 className="display-5 fw-bolder text-center text-white pb-5">
                We are not just{" "}
                <span className="gradient_light gradient_text">blue-black</span>
              </h2>
              <button className="bg-transparent border-0 position-relative r d-block col-10 fw-bold fs-3 rounded mx-auto mt-5 py-2">
                <div className="position-absolute top-0 w-full h-full rainbow_color opacity-25 rounded left-0 border   -z-1"></div>
                <span className="rainbow_color gradient_text">
                  See our projects
                </span>
              </button>
            </Col>
            <Col xs={3}>
              <img src="/img/poker_app.svg" width="100%" alt="" />
            </Col>
          </Row>
        </section>
      </Container>

      <Footer />
    </div>
  );
}

export default HomeScreen;
