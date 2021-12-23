import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import ClockIcon from "../../vectors/Icons/ClockIcon";
import MoneyIcon from "../../vectors/Icons/MoneyIcon";
import NetworkIcon from "../../vectors/Icons/NetworkIcon";

function HelpCards() {
  return (
    <Row spacing={0} className='align-items-center justify-content-center mt-5'>
      <Col xs={4} style={{marginRight:"-4rem"}}>
        <Card className="card_light help_card_blur d-flex  flex-column align-items-center position-relative py-4">
          <div className="position-absolute card_icon_placement" style={{top:'-42%'}}>
            <ClockIcon width={180} height={181} />
          </div>
          <div className="invisible">
            <ClockIcon width={150} height={90} />
          </div>
          <Card.Body className='pe-5 ps-4'>
            <h3 className="text-white fw-bold text-center">
              Less Time Consuming
            </h3>
            <p className="text-center text_light mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl
              nisi, nunc in porttitor. Donec eleifend scelerisque proin ac.
              Sodales egestas nunc, venenatis dignissim. Donec nunc neque proin
              aliquam fringilla magna nec consectetur.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nisl nisi, nunc in porttitor.
              Donec eleifend scelerisque proin ac. Sodales egestas nunc,
              venenatis dignissim.{" "}
            </p>
            <button
              className="bg-transparent mt-4 border-0 d-block position-relative"
              style={{ width: "100%" }}
            >
              <div
                className="gradient_light  px-4 py-2 rounded"
                style={{ opacity: 0.2 }}
              >
                <p className="mb-0 fw-bold fs-5 invisible">Launch DEx </p>
              </div>
              <p
                className="mb-0 opacity-100 fw-bold  gradient_light gradient_text position-absolute top-50 start-50 translate-middle text-center"
                style={{ width: "100%" }}
              >
                Know More
              </p>
            </button>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={4} style={{zIndex:10}}>
        <Card className="card_light help_card_blur d-flex flex-column align-items-center position-relative py-4">
          <div className="position-absolute card_icon_placement" style={{top:"-45%"}}>
            <MoneyIcon width={220} height={221} />
          </div>
          <div className="invisible">
            <ClockIcon width={150} height={120} />
          </div>
          <Card.Body className="px-5">
            <h3 className="text-white fw-bold text-center">
              Low Transaction Fees
            </h3>
            <p className="text-center text_light mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl
              nisi, nunc in porttitor. Donec eleifend scelerisque proin ac.
              Sodales egestas nunc, venenatis dignissim. Donec nunc neque proin
              aliquam fringilla magna nec consectetur.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nisl nisi, nunc in porttitor.
              Donec eleifend scelerisque proin ac. Sodales egestas nunc,
              venenatis dignissim.{" "}
            </p>
            <button
              className="bg-transparent mt-4 border-0 d-block position-relative"
              style={{ width: "100%" }}
            >
              <div
                className="gradient_light  px-4 py-2 rounded"
                style={{ opacity: 0.2 }}
              >
                <p className="mb-0 fw-bold fs-5 invisible">Launch DEx </p>
              </div>
              <p
                className="mb-0 opacity-100 fw-bold  gradient_light gradient_text position-absolute top-50 start-50 translate-middle text-center"
                style={{ width: "100%" }}
              >
                Know More
              </p>
            </button>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={4} style={{marginLeft:"-4rem"}}>
        <Card className="card_light help_card_blur d-flex  flex-column align-items-center position-relative py-4">
          <div className="position-absolute card_icon_placement" >
            <NetworkIcon width={220} height={220} />
          </div>
          <div className="invisible">
            <ClockIcon width={150} height={90} />
          </div>
          <Card.Body className='ps-5 pe-4'>
            <h3 className="text-white fw-bold text-center">
              Trust in CEX
            </h3>
            <p className="text-center text_light mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl
              nisi, nunc in porttitor. Donec eleifend scelerisque proin ac.
              Sodales egestas nunc, venenatis dignissim. Donec nunc neque proin
              aliquam fringilla magna nec consectetur.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nisl nisi, nunc in porttitor.
              Donec eleifend scelerisque proin ac. Sodales egestas nunc,
              venenatis dignissim.{" "}
            </p>
            <button
              className="bg-transparent mt-4 border-0 d-block position-relative"
              style={{ width: "100%" }}
            >
              <div
                className="gradient_light  px-4 py-2 rounded"
                style={{ opacity: 0.2 }}
              >
                <p className="mb-0 fw-bold fs-5 invisible">Launch DEx </p>
              </div>
              <p
                className="mb-0 opacity-100 fw-bold  gradient_light gradient_text position-absolute top-50 start-50 translate-middle text-center"
                style={{ width: "100%" }}
              >
                Know More
              </p>
            </button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default HelpCards;
