import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function Introduction() {
  return (
    <Container className="main-content">
      <Row>
        <Col className="text-left white-text">
          <h2 className="text-center z-index color-welcome">My name is Steven Jones</h2>
          <Image
            className="intro-image dub-border box-shadow-grey z-index jumbo-border"
            src="../assets/TheStevens.jpg"
            rounded
          />
          <p>
            This site was created to showcase the skills that I have learned and
            the primary resources that I have used to procure the knowledge
            garnered while studying web development at the University of
            Arizona. In the top nav bar you will see that I have links displayed
            in a linear fashion to the <q>Home</q>, <q>Introduction</q>,{" "}
            <q>Gallery</q>, and <q>Resources</q> pages as well as a dropdown.
            The contents of which follow: links to my Github and LinkedIn
            profiles as well as a link to my resume for your viewing pleasure.
          </p>
          <p>
            I am from Colorado and haven't been in Arizona long by any stretch.
            To be honest, I would never make the lucid decision to relocate my
            wife Moriah, son Steven, and dog Penny anywhere in Arizona. I was
            never particularyly fond of copious amounts of heat on end. Being in
            Arizona, I see that air-conditioning helps a great deal as well as
            playing ice hockey; which my son and I do as frequently as possible.
            I also enjoy family bike rides when it is the appropriate
            temperature, practicing and watching MMA, many things art related as
            well as many deliniations of the technology category including web
            development. I feel thankful to be at my current station in life and
            hope I am aware enough to live the journey that I am on and truly
            enjoy it. I intend on continueing my growth as a full-stack
            web-developer in the foreseeable future.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Introduction;
