import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import headshot from "../imgs/headshot_wigleyr.jpg";
import tipcalc from "../imgs/tip-calculator.png";
import expensesapp from "../imgs/expenses-app.png";
import spacetourism from "../imgs/space-tourism-website.png";
import ModalOne from "./ModalOne";
import ModalTwo from "./ModalTwo";
import ModalThree from "./ModalThree";

const PortfolioCard = (props) => {
  const [modalOneShow, setModalOneShow] = React.useState(false);
  const [modalTwoShow, setModalTwoShow] = React.useState(false);
  const [modalThreeShow, setModalThreeShow] = React.useState(false);

  return (
    <div className="bg-secondary">
      <>
        <ModalOne show={modalOneShow} onHide={() => setModalOneShow(false)} />
      </>
      <>
        <ModalTwo show={modalTwoShow} onHide={() => setModalTwoShow(false)} />
      </>
      <>
        <ModalThree
          show={modalThreeShow}
          onHide={() => setModalThreeShow(false)}
        />
      </>
      <Container
        as="section"
        fluid="sm"
        id="portfolio"
        className="bg-secondary"
      >
        <Row as="header" className="pt-4">
          <Col>
            <h2 className="text-lowercase">Portfolio</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="body-text">
              Most of my current projects are built with{" "}
              <mark className="text-primary-emphasis">React.js</mark>. I strive
              to create useful applications that are{" "}
              <mark className="text-secondary">dynamic</mark>,{" "}
              <mark className="text-secondary">responsive</mark>,{" "}
              <mark className="text-secondary">intuitive</mark>, and{" "}
              <mark className="text-secondary">pleasing</mark>.
            </p>
          </Col>
        </Row>
        <Row className="pb-2">
          <Col className="pt-3 d-flex justify-content-center justify-content-xl-start">
            <Card
              className="border-3 border-primary card-transition"
              onClick={() => setModalOneShow(true)}
              style={{ width: "5rem" }}
              as="figure"
            >
              <Card.Img
                variant="top"
                src={tipcalc}
                className="portfolio-card-img"
              />
              <Card.Body className="p-2">
                <Card.Title as="h5" className="text-center text-primary">
                  Tip Calculator
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="pt-3 d-flex justify-content-center justify-content-xl-start">
            <Card
              className="border-3 border-primary card-transition"
              onClick={() => setModalTwoShow(true)}
              style={{ width: "5rem" }}
              as="figure"
            >
              <Card.Img
                variant="top"
                src={spacetourism}
                className="portfolio-card-img"
              />
              <Card.Body className="p-2">
                <Card.Title as="h5" className="text-center text-primary">
                  Space Tourism
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="pt-3 d-flex justify-content-center justify-content-xl-start">
            <Card
              className="border-3 border-primary card-transition"
              onClick={() => setModalThreeShow(true)}
              style={{ width: "5rem" }}
              as="figure"
            >
              <Card.Img
                variant="top"
                src={expensesapp}
                className="portfolio-card-img"
              />
              <Card.Body className="p-2">
                <Card.Title as="h5" className="text-center text-primary">
                  Expenses App
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PortfolioCard;
