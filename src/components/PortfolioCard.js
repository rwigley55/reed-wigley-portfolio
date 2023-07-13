import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import headshot from "../imgs/headshot_wigleyr.jpg";
import ModalOne from "./ModalOne";

const PortfolioCard = (props) => {
  const [modalOneShow, setModalOneShow] = React.useState(false);
  
  return (
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
            <span className="text-secondary">consectetur adipiscing elit</span>,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.
            Duis ultricies lacus sed turpis{" "}
            <span className="text-secondary">tincidunt id aliquet risus</span>.
            Risus viverra adipiscing at in tellus integer feugiat scelerisque
            varius.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="pt-3">
          <Card className="border-3 border-primary" onClick={() => setModalOneShow(true)} style={{ width: '6rem' }}>
            <Card.Img variant="top" src={headshot} />
            <Card.Body className="p-2">
            <Card.Title className="text-center">Example</Card.Title>
            </Card.Body>
          </Card>
          </Col>
          <Col className="pt-3">
          <Card className="border-3 border-primary" style={{ width: '6rem' }}>
            <Card.Img variant="top" src={headshot} />
            <Card.Body className="p-2">
              <Card.Title className="text-center">Example</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="pt-3">
          <Card className="border-3 border-primary" style={{ width: '6rem' }}>
            <Card.Img variant="top" src={headshot} />
            <Card.Body className="p-2">
            <Card.Title className="text-center">Example</Card.Title>
            </Card.Body>
          </Card>
          <>
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}

      <ModalOne
        show={modalOneShow}
        onHide={() => setModalOneShow(false)}
      />
    </>
        </Col>
      </Row>
    </Container>
  );
};

export default PortfolioCard;
