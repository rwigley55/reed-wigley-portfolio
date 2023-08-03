import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Resume = (props) => {
  return (
    <Container className="">
      <Row>
        <Col>
          <h1 className="text-center title-primary-emphasis">Reed Wigley</h1>
          <h2 className="text-center">Front-end Developer</h2>
        </Col>
      </Row>
      <Row className="resume-background">
        <Col>
          <h3 className="resume-text resume-header">Summary</h3>
          <p className="resume-text body-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Elementum nisi quis eleifend quam adipiscing vitae proin sagittis
            nisl. Quam nulla porttitor massa id neque aliquam vestibulum morbi
            blandit. Ac tortor vitae purus faucibus.{" "}
          </p>
        </Col>
      </Row>
      <Row className="resume-background">
        <Col>
          <h3 className="resume-text resume-header">Experience</h3>
        </Col>
      </Row>
      <Row className="resume-background">
        <Col>
          <h4 className="resume-text resume-header border-bottom">
            Job 1 - Position 1
          </h4>
        </Col>
        <Col>
          <h4 className="resume-text resume-header text-end border-bottom">
            Year-Year
          </h4>
        </Col>
      </Row>
      <Row className="resume-background">
        <Col>
          <p className="resume-text body-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Elementum nisi quis eleifend quam adipiscing vitae proin sagittis
            nisl. Quam nulla porttitor massa id neque aliquam vestibulum morbi
            blandit. Ac tortor vitae purus faucibus.{" "}
          </p>
        </Col>
      </Row>
      <Row className="resume-background">
        <Col>
          <h4 className="resume-text resume-header border-bottom">
            Job 2 - Position 2
          </h4>
        </Col>
        <Col>
          <h4 className="resume-text resume-header text-end border-bottom">
            Year-Year
          </h4>
        </Col>
      </Row>
      <Row className="resume-background">
        <Col>
          <p className="resume-text body-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Elementum nisi quis eleifend quam adipiscing vitae proin sagittis
            nisl. Quam nulla porttitor massa id neque aliquam vestibulum morbi
            blandit. Ac tortor vitae purus faucibus.{" "}
          </p>
        </Col>
      </Row>
      <Row className="resume-background">
        <Col>
          <h3 className="resume-text resume-header">Skills</h3>
        </Col>
      </Row>
      <Row className="resume-background">
        <Col xs={12}>
          <h4 className="resume-text resume-header">Skill 1</h4>
        </Col>
        <Col xs={12}>
          <p className="resume-text body-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </Col>
        <Col xs={12}>
          <h4 className="resume-text resume-header">Skill 2</h4>
        </Col>
        <Col xs={12}>
          <p className="resume-text body-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </Col>
        <Col xs={12}>
          <h4 className="resume-text resume-header">Skill 3</h4>
        </Col>
        <Col xs={12}>
          <p className="resume-text body-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </Col>
      </Row>
      <Row className="resume-background">
        <Col>
          <h3 className="resume-text resume-header">Education</h3>
        </Col>
      </Row>
      <Row className="resume-background">
        <Col>
          <h4 className="resume-text resume-header border-bottom">School 1</h4>
        </Col>
        <Col>
          <h4 className="resume-text resume-header text-end border-bottom">
            Year-Year
          </h4>
        </Col>
      </Row>
      <Row className="resume-background">
        <Col>
          <p className="resume-text body-text">Degree</p>
        </Col>
      </Row>
      <Row className="resume-background">
        <Col>
          <h4 className="resume-text resume-header border-bottom">School 2</h4>
        </Col>
        <Col>
          <h4 className="resume-text resume-header text-end border-bottom">
            Year-Year
          </h4>
        </Col>
      </Row>
      <Row className="resume-background">
        <Col>
          <p className="resume-text body-text">Degree 2</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
