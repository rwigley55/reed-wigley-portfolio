import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import headshot from "../imgs/headshot_wigleyr.jpg";
import ModalOne from "./ModalOne";
import ModalTwo from "./ModalTwo";
import ModalThree from "./ModalThree";

const PortfolioCard = (props) => {
  const [modalOneShow, setModalOneShow] = React.useState(false);
  const [modalTwoShow, setModalTwoShow] = React.useState(false);
  const [modalThreeShow, setModalThreeShow] = React.useState(false);

  return (
    <div className="bg-primary">
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
      <Container className="bg-primary">
        <Row>
          <Col>
            <h2 className="text-lowercase">Portfolio</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="body-text">
              Lorem ipsum dolor sit amet,{" "}
              <span className="text-secondary">
                consectetur adipiscing elit
              </span>
              , sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Rhoncus aenean vel elit scelerisque mauris pellentesque
              pulvinar. Duis ultricies lacus sed turpis{" "}
              <span className="text-secondary">tincidunt id aliquet risus</span>
              . Risus viverra adipiscing at in tellus integer feugiat
              scelerisque varius.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="pt-3">
            <Card
              className="border-3 border-primary"
              onClick={() => setModalOneShow(true)}
              style={{ width: "6rem" }}
            >
              <Card.Img variant="top" src={headshot} />
              <Card.Body className="p-2">
                <Card.Title className="text-center text-primary">
                  Example
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="pt-3">
            <Card
              className="border-3 border-primary"
              onClick={() => setModalTwoShow(true)}
              style={{ width: "6rem" }}
            >
              <Card.Img variant="top" src={headshot} />
              <Card.Body className="p-2">
                <Card.Title className="text-center text-primary">
                  Example
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="pt-3">
            <Card
              className="border-3 border-primary"
              onClick={() => setModalThreeShow(true)}
              style={{ width: "6rem" }}
            >
              <Card.Img variant="top" src={headshot} />
              <Card.Body className="p-2">
                <Card.Title className="text-center text-primary">
                  Example
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
