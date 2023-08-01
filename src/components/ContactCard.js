import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import email from "../svg/email.svg";
import github from "../svg/github.svg";
import linkedin from "../svg/linkedin.svg";
import EmailSvg from "../svg/EmailSvg";
import GithubSvg from "../svg/GithubSvg";
import LinkedinSvg from "../svg/LinkedinSvg";
// import { Email as EmailSvg } from "../svg/email.svg";

const ContactCard = (props) => {
  const [emailFill, setEmailFill] = useState("#FFB800");
  const [githubFill, setGithubFill] = useState("#FFB800");
  const [linkedinFill, setLinkedinFill] = useState("#FFB800");

  const handleMouseOverEmail = () => {
    setEmailFill("#14FF00");
  };

  const handleMouseOverGit = () => {
    setGithubFill("#14FF00");
  };

  const handleMouseOverLinkedin = () => {
    setLinkedinFill("#14FF00");
  };

  const handleMouseOutEmail = () => {
    setEmailFill("#FFB800");
  };

  const handleMouseOutGit = () => {
    setGithubFill("#FFB800");
  };

  const handleMouseOutLinkedin = () => {
    setLinkedinFill("#FFB800");
  };

  return (
    <Container id="contact">
      <Row className="pt-4">
        <Col>
          <h2 className="text-lowercase">Contact</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="body-text">
            Let's get in touch! I am looking for a new opportunity to fulfil my
            aspiration on becoming a front-end developer. Check out my <a href="#" className="text-primary-emphasis">resume</a>{" "}
            and feel free to contact me via any of the avenues listed below.
          </p>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col className="d-flex justify-content-center">
          <a href="#">
            <EmailSvg
              width={75}
              height={75}
              fill={emailFill}
              onMouseOver={handleMouseOverEmail}
              onMouseOut={handleMouseOutEmail}
            />
          </a>
          <a href="#">
            <GithubSvg
              width={75}
              height={75}
              fill={githubFill}
              onMouseOver={handleMouseOverGit}
              onMouseOut={handleMouseOutGit}
            />
          </a>
          <a href="#">
            <LinkedinSvg
              width={75}
              height={75}
              fill={linkedinFill}
              onMouseOver={handleMouseOverLinkedin}
              onMouseOut={handleMouseOutLinkedin}
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactCard;
