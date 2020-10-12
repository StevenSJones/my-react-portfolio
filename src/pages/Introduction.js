import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Image from 'react-bootstrap/Image'

function Introduction() {
  return (
    <Container className="text-shadow-light-font-light">
      <Row>
        <Col className="col justify-content-center">
          <h1 border="secondary" style={{ width: "18rem" }}>
            Hello World!
          </h1>
          <CardColumns>
            <Card
              bg="dark"
              text="light"
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header> <Col xs={6} md={4}>
      <Image src="../../public/assets/images/TheStevens.jpg" roundedCircle />
    </Col></Card.Header>
              <Card.Body>
                <Card.Title>My name is Steven Jones</Card.Title>
                <Card.Text>
                  This site was created to introduce myself and to showcase the
                  skills that I have learned and what I have used to procure the
                  knowledge garnered while studying web development at the
                  University of Arizona. In the top nav bar you will see that I
                  have a dropdown that contains links to my Github and LinkedIn
                  profiles as well as a link to my resume and the subsequent
                  pages of the assignment.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardColumns>
          <CardColumns>
            <Card
              bg="dark"
              text="light"
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header></Card.Header>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  I am from Colorado and haven't been in Arizona long at all. My
                  wife Moriah, son Steven, and dog Penny moved out here a short
                  time ago. I enjoy playing and watching ice hockey, practicing
                  and watching MMA, most things art related as well as most
                  things technology related. I feel thankful to be at my current
                  station in life and hope I am aware enough to live the journey
                  that I am on and truly enjoy it.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardColumns>
        </Col>
      </Row>
    </Container>
  );
}

export default Introduction;
