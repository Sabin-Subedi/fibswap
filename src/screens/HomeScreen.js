import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import NavigationBar from "../components/Navbar";

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
        <main className="">
          <Row>
            <Col xs={8} className="mx-auto">
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
              <Row className='align-items-center gap-0 '>
              <Col style={{marginRight:'-13rem'}} xs={4}>
                  <div className="">
                    <Card
                      className="card_light card_border_gradient_light  d-flex flex-column align-items-center position-relative"
                      style={{
                        background:
                          "linear-gradient(108.66deg, rgba(10, 21, 36, 0.3) -47.25%, rgba(13, 28, 39, 0.3) 145.76%)",
                          width:'10rem'
                      }}
                    >
                      <div className="">
                        <img
                          src="/img/bnb.png"
                          style={{ width: "15rem" }}
                          alt="bnb"
                          className="invisible"
                        />
                        <div
                          className="position-absolute "
                          style={{
                            zIndex: 5,
                            top: "55%",
                            left: "40%",
                            transform: "translate(-50%,-50%)",
                          }}
                        >
                          <img
                            src="/img/bnb.png"
                            style={{ width: "18rem" }}
                            alt="bnb"
                          />
                        </div>
                      </div>
                    
                    </Card>
                  </div>
                </Col>
                <Col xs={4} style={{zIndex:10,}}>
                  <div className="">
                    <Card
                      className="card_light card_border_gradient_light bg-body-dark  d-flex flex-column align-items-center position-relative"
                      style={{
                        background:
                          "linear-gradient(108.66deg, rgba(10, 21, 36, 0.3) -47.25%, rgba(13, 28, 39, 0.3) 145.76%)",
                      }}
                    >
                      <div className="">
                        <img
                          src="/img/ethereum.png"
                          style={{ width: "10rem" }}
                          alt="Ethereum"
                          className="invisible"
                        />
                        <div
                          className="position-absolute "
                          style={{
                            zIndex: 5,
                            top: "-8rem",
                            left: "50%",
                            transform: "translateX(-50%)",
                          }}
                        >
                          <img
                            src="/img/ethereum.png"
                            style={{ width: "16rem" }}
                            alt="Ethereum"
                          />
                        </div>
                      </div>
                      <div className="text-center text-white top-0">
                        <h4>ETHERIUM</h4>
                        <p>
                          Etherium is an old and trustable cryptocurrency to
                          invest in
                        </p>
                      </div>
                    </Card>
                  </div>
                </Col>
                <Col style={{marginLeft:'-5rem'}} xs={4}>
                  <div className="">
                    <Card
                      className="card_light card_border_gradient_light  d-flex flex-column align-items-center position-relative"
                      style={{
                        background:
                          "linear-gradient(108.66deg, rgba(10, 21, 36, 0.3) -47.25%, rgba(13, 28, 39, 0.3) 145.76%)",
                          width:'10rem'
                      }}
                    >
                      <div className="">
                        <img
                          src="/img/token.png"
                          style={{ width: "10rem" }}
                          alt="token"
                          className="invisible"
                        />
                        <div
                          className="position-absolute "
                          style={{
                            zIndex: 5,
                            top: "45%",
                            left: "90%",
                            transform: "translate(-50%,-50%)",
                          }}
                        >
                          <img
                            src="/img/token.png"
                            style={{ width: "16rem" }}
                            alt="token"
                          />
                        </div>
                      </div>
                    
                    </Card>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </main>
      </Container>

      <Footer />
    </div>
  );
}

export default HomeScreen;
