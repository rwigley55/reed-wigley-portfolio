import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import headshot from "../imgs/headshot_wigleyr.jpg";
import tipcalc from "../imgs/tip-calculator.png";
import adduser from "../imgs/add-user-demo.png";
import expensesapp from "../imgs/expenses-app.png";
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
      <Container fluid="sm" id="portfolio" className="bg-secondary">
        <Row className="pt-4">
          <Col>
            <h2 className="text-lowercase">Portfolio</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="body-text">
              Most of my current projects are built with{" "}
              <span className="text-primary-emphasis">React.js</span>. I strive
              to create useful applications that are{" "}
              <span className="text-secondary">dynamic</span>,{" "}
              <span className="text-secondary">responsive</span>,{" "}
              <span className="text-secondary">intuitive</span>, and{" "}
              <span className="text-secondary">pleasing</span>.
            </p>
          </Col>
        </Row>
        <Row className="pb-2">
          <Col className="pt-3 d-flex justify-content-center justify-content-xl-start">
            <Card
              className="border-3 border-primary card-transition"
              onClick={() => setModalOneShow(true)}
              style={{ width: "5rem" }}
            >
              <Card.Img
                variant="top"
                src={tipcalc}
                className="portfolio-card-img"
              />
              <Card.Body className="p-2">
                <Card.Title className="text-center text-primary">
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
            >
              <Card.Img
                variant="top"
                src={adduser}
                className="portfolio-card-img"
              />
              <Card.Body className="p-2">
                <Card.Title className="text-center text-primary">
                  Add User Demo
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="pt-3 d-flex justify-content-center justify-content-xl-start">
            <Card
              className="border-3 border-primary card-transition"
              onClick={() => setModalThreeShow(true)}
              style={{ width: "5rem" }}
            >
              <Card.Img
                variant="top"
                src={expensesapp}
                className="portfolio-card-img"
              />
              <Card.Body className="p-2">
                <Card.Title className="text-center text-primary">
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
