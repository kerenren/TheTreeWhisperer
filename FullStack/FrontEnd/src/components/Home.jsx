import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const leaf = <FontAwesomeIcon icon={faLeaf} />;

  return (
    <Container style={{ position: "relative", top: "-8rem" }}>
      <Row style={{ position: "relative", top: "-2rem" }}>
        <Col></Col>
        <Col xs={9}>
          <h1 style={{ color: "white", fontSize: "3rem" }}>
            {leaf} Welcome to The Tree Whisperer
          </h1>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={7}>
          <Card className="card">
            <Card.Body style={{ fontSize: "1rem" }}>
              Many countries in the world, especially ones who have low GNI or
              considers as a developing country, base their food consumption
              mainly on agricultural sources rather than industrial sources.
              <br />
              <br />
              Moreover, agriculture is the main source of the citizens income
              and one of the main economic growth engine. In these countries,
              farmers have a limited number of tools to deal with epidemics,
              such as pests, diseases, pollution, and so on.
              <br />
              <br />
              Unfortunately, they will find out about all the above in a late
              stage of the disease and will have no other choice than cut the
              tree. Knowing that probably this will not happen to a single tree
              but to numbers ones, it can be severe damage to the farmer's
              income.
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>{" "}
      </Row>
    </Container>
  );
};

export default Home;
