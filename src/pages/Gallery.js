import React from "react";
import Project from "../components/Project";
import { Container, Row, Col } from "react-bootstrap";

function Gallery(props) {
  return (
    <Container>
      <Row>
        <Col>
        <Project title="Burger App" description="burger app description" src="./assets/images/burgerSS.jpg" url="https://intense-castle-15409.herokuapp.com/"/>
        </Col>
      </Row>
    </Container>

    // <div className="container">
    //   <CardGroup className="row">
    //     <Card className="col">
    //       <Card.Img variant="top" src="holder.js/100px160" />
    //       <Card.Body>
    //         <Card.Title>The Burger App</Card.Title>
    //         <Card.Text>
    //           √ - The Burger App allows you to choose from the burgers listed.
    //           You can then save or devour the burger. Click "The Burger App"
    //           button to proceed to the site.
    //         </Card.Text>
    //       </Card.Body>
    //       <Card.Footer>
    //         <Button variant="outline-secondary">The Burger App</Button>{" "}
    //       </Card.Footer>
    //     </Card>
    //     <Card className="col">
    //       <Card.Img variant="top" src="holder.js/100px160" />
    //       <Card.Body>
    //         <Card.Title>City Info</Card.Title>
    //         <Card.Text>
    //           √ - Project 1 allows the user to look up city information using
    //           API calls. Perhaps you are visiting a new city and would like to
    //           know a few of the activities in the area that weekend then this
    //           app is for you. Click the "Project 1" button to proceed to the
    //           site.{" "}
    //         </Card.Text>
    //       </Card.Body>
    //       <Card.Footer>
    //         <Button variant="outline-secondary">City Info</Button>{" "}
    //       </Card.Footer>
    //     </Card>
    //     <Card className="col">
    //       <Card.Img variant="top" src="holder.js/100px160" />
    //       <Card.Body>
    //         <Card.Title>The Code Quiz</Card.Title>
    //         <Card.Text>
    //           √ - The Code Quiz tests the users knowledge with a series of
    //           questions. Answer correctly and proceed, but miss a question and
    //           you will lose time! Click "The Code Quiz" button to proceed to
    //           the site.
    //         </Card.Text>
    //       </Card.Body>
    //       <Card.Footer>
    //         <Button variant="outline-secondary">The Code Quiz</Button>{" "}
    //       </Card.Footer>
    //     </Card>
    //   </CardGroup>
    //   <CardGroup className="row">
    //     <Card className="col">
    //       <Card.Img variant="top" src="holder.js/100px160" />
    //       <Card.Body>
    //         <Card.Title>The Fitness Tracker</Card.Title>
    //         <Card.Text>
    //           √ - The Fitness Tracker allows you to track your fitness by
    //           keeping track of your workouts in a personalised db experience.
    //           Press the button below to visit the site.
    //         </Card.Text>
    //       </Card.Body>
    //       <Card.Footer>
    //         <Button variant="outline-secondary">The Fitness Tracker</Button>{" "}
    //       </Card.Footer>
    //     </Card>
    //     <Card className="col">
    //       <Card.Img variant="top" src="holder.js/100px160" />
    //       <Card.Body>
    //         <Card.Title>Read Me Generator</Card.Title>
    //         <Card.Text>
    //           √ - The Readme generator is a command line interface app or CLI
    //           that creates a readme.md file for your web development project.
    //           As a CLI there is not page to visit.
    //         </Card.Text>
    //       </Card.Body>
    //       <Card.Footer></Card.Footer>
    //     </Card>
    //     <Card className="col">
    //       <Card.Img variant="top" src="holder.js/100px160" />
    //       <Card.Body>
    //         <Card.Title>The Work Day Scheduler</Card.Title>
    //         <Card.Text>
    //           √ - The Work Day Scheduler allows you to write out your plans
    //           for the work day; 9-5. You can create a todo and then get rid of
    //           it when it is comleted. It also has a jumbotron the lights up
    //           yellow if you visit the site in the morning and blue for the
    //           evening.
    //         </Card.Text>
    //       </Card.Body>
    //       <Card.Footer>
    //         <Button variant="outline-secondary">
    //           The Work Day Scheduler
    //         </Button>{" "}
    //       </Card.Footer>
    //     </Card>
    //   </CardGroup>
    // </div>
  );
}

export default Gallery;
