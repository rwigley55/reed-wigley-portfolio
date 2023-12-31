import React, { Fragment } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

const Resume = (props) => {
  return (
    <Fragment>
      <Container className="">
        <Row>
          <Col className="px-0">
            <h1 className="resume-title mb-0 text-center text-lg-start">Reed Wigley</h1>
            <h2 className="mb-0 text-center text-lg-start">Front-end Developer</h2>
          </Col>
          <Col lg={3}>
            <ListGroup className="p-0 border border-dot mt-2">
              <ListGroup.Item
                action
                className="bg-primary resume-link p-0 border-0 text-center box-link"
                href="#"
              >
                return
              </ListGroup.Item>
              <ListGroup.Item
                action
                className="bg-primary resume-link p-0 border-0 text-center box-link"
                href="#"
              >
                download
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <a className="resume-link mx-1" href="#">
              github.com/reed
            </a>
            <span className="resume-separator">•</span>
            <a className="resume-link mx-1" href="#">
              linkedin.com/reed
            </a>
            <span className="resume-separator">•</span>
            <a className="resume-link mx-1" href="#">
              website.com/reed
            </a>
            <span className="resume-separator">•</span>
            <a className="resume-link mx-1" href="#">
              email@gmail.com
            </a>
          </Col>
        </Row>
      </Container>
      <Container className="resume-background rounded-2 mb-1">
        <Row>
          <Col>
            <h3 className="resume-text resume-header mb-1 fw-bold mt-1">
              <span className="resume-header-character">{">"}</span> Summary
            </h3>
            <p className="resume-text lh-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Elementum nisi quis eleifend quam adipiscing vitae proin sagittis
              nisl. Quam nulla porttitor massa id neque aliquam vestibulum morbi
              blandit. Ac tortor vitae purus faucibus.{" "}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="resume-text resume-header mb-1 fw-bold">
              <span className="resume-header-character">{">"}</span> Experience
            </h3>
          </Col>
        </Row>
        <Row>
          <Col className="">
            <h4 className="resume-text resume-header mb-1">
              <span className="resume-text resume-header mb-1 fw-bold">
                Search Engine Optimization Specialist
              </span>{" "}
              • All Campus • Chicago, IL
            </h4>
          </Col>
          <Col xs={4}>
            <h4 className="resume-text resume-header text-end mb-1">
              <span className="resume-header-character fw-bold">(</span>{" "}
              2019-2022{" "}
              <span className="resume-header-character fw-bold">)</span>
            </h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul className="ps-2 mb-1">
              <li className="resume-text lh-sm">
                Analyzed and optimized SEO strategy and tactics on a portfolio
                of client held websites.
              </li>
              <li className="resume-text lh-sm">
                Conducted extensive keyword research and competitive analysis
                for website content.
              </li>
              <li className="resume-text lh-sm">
                Managed link building campaigns.
              </li>
              <li className="resume-text lh-sm">
                SEO reporting on key organic traffic KPIs using Google
                Analytics, Google Search Console, and other various SEO industry
                accepted tools.
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="pe-0">
            <h4 className="resume-text resume-header mb-1">
              <span className="resume-text resume-header mb-1 fw-bold">
                Digital Media Associate
              </span>{" "}
              • Hutong School • Shanghai, China
            </h4>
          </Col>
          <Col xs={4}>
            <h4 className="resume-text resume-header text-end mb-1">
              <span className="resume-header-character fw-bold">(</span>{" "}
              2017-2019{" "}
              <span className="resume-header-character fw-bold">)</span>
            </h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul className="ps-2 mb-2">
              <li className="resume-text lh-sm">
                Developed website SEO and paid search strategies using Google
                AdWords and Keyword Planner.
              </li>
              <li className="resume-text lh-sm">
                Digital content creation for social media and advertising
                campaigns.
              </li>
              <li className="resume-text lh-sm">
                Created various blog posts on industry related topics to boost
                website traffic.
              </li>
              <li className="resume-text lh-sm">
                Executed online marketing campaigns, including website
                optimization management.
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="resume-text resume-header mb-1 fw-bold">
              <span className="resume-header-character">{">"}</span> Skills
            </h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h4 className="resume-text resume-header mb-0 fw-bold">
              Technologies & Frameworks
            </h4>
          </Col>
          <Col xs={12}>
            <p className="resume-text lh-sm mb-1">
              HTML • CSS • Bootstrap • Tailwind • JavaScript • React
            </p>
          </Col>
          <Col xs={12}>
            <h4 className="resume-text resume-header mb-0 fw-bold">
              DevOps & Productivity
            </h4>
          </Col>
          <Col xs={12}>
            <p className="resume-text lh-sm mb-1">
              Scrum • Lean • Kanban • Figma • InDesign • Git • Github •
              WordPress
            </p>
          </Col>
          <Col xs={12}>
            <h4 className="resume-text resume-header mb-0 fw-bold">
              Languages
            </h4>
          </Col>
          <Col xs={12}>
            <p className="resume-text lh-sm mb-1">
              English (native) • Chinese Mandarin (Elementary)
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="resume-text resume-header mb-1 fw-bold">
              <span className="resume-header-character">{">"}</span> Education
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 className="resume-text resume-header mb-0 lh-sm fw-bold">
              University of Connecticut
            </h4>
          </Col>
          <Col>
            <h4 className="resume-text resume-header text-end lh-sm mb-0">
              <span className="resume-header-character lh-sm mb-0 fw-bold">
                (
              </span>{" "}
              2012-2016{" "}
              <span className="resume-header-character lh-sm mb-0 fw-bold">
                )
              </span>
            </h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="resume-text mb-1 lh-sm">
              Bachelor of Sciences • International Business Management
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 className="resume-text resume-header mb-0 fw-bold lh-sm">
              Hutong School
            </h4>
          </Col>
          <Col>
            <h4 className="resume-text resume-header text-end mb-0 lh-sm">
              <span className="resume-header-character fw-bold mb-0 lh-sm">
                (
              </span>{" "}
              2017-2019{" "}
              <span className="resume-header-character fw-bold mb-0 lh-sm">
                )
              </span>
            </h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="resume-text mb-1 lh-sm">
              Chinese Mandarin • HSK II certified
            </p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Resume;
