import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import email from "../svg/email.svg";
import github from "../svg/github.svg";
import linkedin from "../svg/linkedin.svg";

const ContactCard = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <h2 className="text-lowercase">Contact</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="body-text">
            Lorem ipsum dolor sit amet,{" "}
            <span className="text-secondary">consectetur adipiscing elit</span>,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.
          </p>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col className="d-flex justify-content-center">
          <a href="#"><Image className="mx-2" src={email} width={75} height={75} /></a>
          <a href="#"><Image className="mx-2" src={github} width={75} height={75} /></a>
          <a href="#"><Image className="mx-2" src={linkedin} width={75} height={75} /></a>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactCard;
