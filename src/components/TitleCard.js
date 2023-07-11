import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./TitleCard.module.css";

const TitleCard = (props) => {
  return (
    <Container fluid className={`${styles.container} bg-primary`}>
      <Row className={styles.row}>
        <Col className={`${styles.col} ${styles.centeredText} lh-1`}>Hello, I'm&nbsp;<span className="text-primary-emphasis">Reed Wigley</span>,</Col>
      </Row>
      <Row className={styles.row}>
        <Col className={`${styles.col} ${styles.centeredText} lh-1`}>a&nbsp;<span className="text-primary-emphasis">front-end</span>&nbsp;developer.</Col>
      </Row>
    </Container>
  );
};

export default TitleCard;
