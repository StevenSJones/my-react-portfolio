import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

function Introduction() {
  return (
    <>
      <Jumbotron fluid>
        <Container>
          <h1>Hello World!</h1>
          <p>
            I am Steven Jones. This site was created to introduce myself and to
            showcase what I have learned and what I have used to procure the
            knowledge garnered while studying web development at the University
            of Arizona. In the top nav bar you will see that I have a dropdown
            that contains links to my Github and LinkedIn profiles as well as a
            link to my resume and the subsequent pages of the assignment.
          </p>
          <p>
            I am from Colorado and haven't been in Arizona long at all. My wife
            Moriah, son Steven, and dog Penny moved out here a short time ago. I
            enjoy playing and watching ice hockey, practicing and watching MMA,
            most things art related as well as most things technology related. I
            feel thankful to be at my current station in life and hope I am
            aware enough to live the journey that I am on and truly enjoy it.
          </p>
        </Container>
      </Jumbotron>
    </>
  );
}

export default Introduction;
