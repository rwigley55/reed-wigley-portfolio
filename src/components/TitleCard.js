import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./TitleCard.module.css";

const TitleCard = (props) => {
  return (
    <Container as="section" id="home" fluid className={`${styles.container} bg-primary`}>
      <Row as="header" className={styles.row}>
        <Col as="h1" className={`${styles.col} ${styles.centeredText} lh-1 px-0 title-text`}>Hello, I'm&nbsp;<mark className="title-primary-emphasis title-text">Reed Wigley</mark>,</Col>
      </Row>
      <Row as="header" className={styles.row}>
        <Col as="h1" className={`${styles.col} ${styles.centeredText} lh-1 px-0 title-text`}>a&nbsp;<mark className="title-secondary-emphasis title-text">front-end</mark>&nbsp;developer.</Col>
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
