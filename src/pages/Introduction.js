import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function Introduction() {
  return (
    <Card border="secondary" style={{ width: "18rem" }}>
      <Card.Header>Hello World!</Card.Header>
      <Card.Body>
        <Card.Title>My name is Steven Jones.</Card.Title>
        <Card.Text>
          This site was created to introduce myself and to showcase the skills
          that I have learned and what I have used to procure the knowledge
          garnered while studying web development at the University of Arizona.
          In the top nav bar you will see that I have a dropdown that contains
          links to my Github and LinkedIn profiles as well as a link to my
          resume and the subsequent pages of the assignment. I am from Colorado
          and haven't been in Arizona long at all. My wife Moriah, son Steven,
          and dog Penny moved out here a short time ago. I enjoy playing and
          watching ice hockey, practicing and watching MMA, most things art
          related as well as most things technology related. I feel thankful to
          be at my current station in life and hope I am aware enough to live
          the journey that I am on and truly enjoy it.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Introduction;
