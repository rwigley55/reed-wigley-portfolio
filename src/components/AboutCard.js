import React from "react";
import { Container, Row, Col, Image, Figure } from "react-bootstrap";
import styles from "./AboutCard.module.css";
import headshot from "../imgs/headshot_wigleyr.jpg";
import bootstrap from "../svg/bootstrap.svg";
import css from "../svg/css.svg";
import html from "../svg/html.svg";
import tailwind from "../svg/tailwind.svg";
import javascript from "../svg/javascript.svg";
import react from "../svg/react.svg";
import ga from "../svg/google-analytics.svg";
import gtm from "../svg/google-tag-manager.svg";

const AboutCard = (props) => {
  return (
    <Container id="about" className="bg-primary">
      <Row className="pt-4">
        <Col>
          <h2 className="text-lowercase">About</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12} xxl={6}>
          <p className="body-text">
            I am beginning my journey into the web development world and I am
            primarily focusing on{" "}
            <span className="text-primary-emphasis">front-end development</span>
            . I am constantly looking for new topics to learn and I am extremely
            motivated to find new avenues that will allow me to kick-start a
            career in the field. I am very interested in{" "}
            <span className="text-secondary">
              building websites and applications
            </span>{" "}
            that delight and inform. I would consider myself a curious
            individual, and I am enjoying the transition into web development. I
            enjoy work that challenges me to learn something new.
          </p>
          <p className="body-text">
            Currently, I primarily work with{" "}
            <span className="text-primary-emphasis">React.js</span>,{" "}
            <span className="text-primary-emphasis">JavaScript</span>,{" "}
            <span className="text-primary-emphasis">CSS</span>,{" "}
            <span className="text-primary-emphasis">Bootstrap</span>, and{" "}
            <span className="text-primary-emphasis">HTML</span>. In addition to
            currently learning front-end technologies, my previous professional
            experiences have taught me{" "}
            <span className="text-secondary">SEO</span> best practices. I have
            qualified experience with{" "}
            <span className="text-secondary">Google Analytics</span> and various
            other industry accepted <span className="text-secondary">SEO</span>{" "}
            tools & resources.
          </p>
        </Col>
        <Col xs={12} xxl={6}>
          <Image
            src={headshot}
            rounded
            className={`${styles.headshot} border border-primary`}
          />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col className="centerFigures justify-content-xxl-start" xxl={8}>
          <Figure className="pe-1 d-inline-flex flex-column align-items-center">
            <Figure.Image width={75} height={75} src={html} className="mb-0" />
            <Figure.Caption className="body-text text-center text-primary lh-1">
              HTML
            </Figure.Caption>
          </Figure>
          <Figure className="pe-1 d-inline-flex flex-column align-items-center">
            <Figure.Image width={75} height={75} src={css} className="mb-0" />
            <Figure.Caption className="body-text text-center text-primary lh-1">
              CSS
            </Figure.Caption>
          </Figure>
          <Figure className="pe-1 d-inline-flex flex-column align-items-center">
            <Figure.Image
              width={75}
              height={75}
              src={bootstrap}
              className="mb-0"
            />
            <Figure.Caption className="body-text text-center text-primary lh-1">
              Bootstrap
            </Figure.Caption>
          </Figure>
          <Figure className="pe-1 d-inline-flex flex-column align-items-center">
            <Figure.Image
              width={75}
              height={75}
              src={tailwind}
              className="mb-0"
            />
            <Figure.Caption className="body-text text-center text-primary lh-1">
              Tailwind
            </Figure.Caption>
          </Figure>
          <Figure className="pe-1 d-inline-flex flex-column align-items-center">
            <Figure.Image
              width={75}
              height={75}
              src={javascript}
              className="mb-0"
            />
            <Figure.Caption className="body-text text-center text-primary lh-1">
              JavaScript
            </Figure.Caption>
          </Figure>
          <Figure className="pe-1 d-inline-flex flex-column align-items-center mb-1">
            <Figure.Image width={75} height={75} src={react} className="mb-0" />
            <Figure.Caption className="body-text text-center text-primary lh-1">
              React
            </Figure.Caption>
          </Figure>
        </Col>
        <Col className="d-inline-flex centerFigures justify-content-xxl-end">
          <Figure className="pe-1 d-inline-flex flex-column align-items-center mb-1">
            <Figure.Image width={75} height={75} src={ga} className="mb-0" />
            <Figure.Caption className="body-text text-center text-primary lh-1">
              Google
              <br />
              Analytics
            </Figure.Caption>
          </Figure>
          <Figure className="pe-1 d-inline-flex flex-column align-items-center mb-1">
            <Figure.Image width={75} height={75} src={gtm} className="mb-0" />
            <Figure.Caption className="body-text text-center text-primary lh-1">
              Google Tag
              <br />
              Manager
            </Figure.Caption>
          </Figure>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutCard;
