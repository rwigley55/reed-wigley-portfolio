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
            Lorem ipsum dolor sit amet,{" "}
            <span className="text-primary-emphasis">
              consectetur adipiscing elit
            </span>
            , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.
            Duis ultricies lacus sed turpis{" "}
            <span className="text-secondary">tincidunt id aliquet risus</span>.
            Risus viverra adipiscing at in tellus integer feugiat scelerisque
            varius.
          </p>{" "}
          <p className="body-text">
            Tempus quam pellentesque nec nam.{" "}
            <span className="text-secondary">Euismod quis</span> viverra nibh
            cras. Cursus mattis molestie a iaculis. Nulla facilisi etiam
            dignissim diam quis enim lobortis scelerisque. Augue neque gravida
            in fermentum et sollicitudin ac orci.
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
        <Col xxl={8}>
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
        <Col className="d-inline-flex justify-content-xxl-end">
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
