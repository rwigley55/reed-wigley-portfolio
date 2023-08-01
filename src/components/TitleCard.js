import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./TitleCard.module.css";

const TitleCard = (props) => {
  return (
    <Container id="home" fluid className={`${styles.container} bg-primary`}>
      <Row className={styles.row}>
        <Col className={`${styles.col} ${styles.centeredText} lh-1 px-0 title-text`}>Hello, I'm&nbsp;<span className="title-primary-emphasis title-text">Reed Wigley</span>,</Col>
      </Row>
      <Row className={styles.row}>
        <Col className={`${styles.col} ${styles.centeredText} lh-1 px-0 title-text`}>a&nbsp;<span className="title-secondary-emphasis title-text">front-end</span>&nbsp;developer.</Col>
      </Row>
    </Container>

    // <Container fluid className="bg-primary">
    //   <Row>
    //     <Col>
    //     Hello, I'm Reed Wigley,
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col>
    //     a front-end developer.</Col>
    //   </Row>
    // </Container>
  );
};

export default TitleCard;
