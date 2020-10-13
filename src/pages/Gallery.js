import React from "react";
import Project from "../components/Project";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";

//the array is a variable that exists inside of the Gallery function
function Gallery(props) {
  const projects = [
    {
      src: "./assets/burgerSS.jpg",
      url: "https://intense-castle-15409.herokuapp.com/",
      title: "Burger app",
      description:
        "√ - The Burger App allows you to choose a burger from the burgers listed. You can then save or devour the burger! Click the link and give it a try.",
    },
    {
      src: "./assets/project1.jpg",
      url: "https://jmuncrief.github.io/p1_location_info/",
      title: "City Info",
      description:
        "√ - City Info allows the user to look up city information using API calls. Perhaps you are visiting a new city and would like to know a few of the activities in the area that during your stay. This app is for you then. Click the Project 1 button to proceed to the site.",
    },
    {
      src: "./assets/codeQuizSS.jpg",
      url: "https://stevensjones.github.io/codeQuizFourthEdition/",
      title: "The Code Quiz",
      description:
        "√ - The Code Quiz tests the users knowledge of coding related topics with a series of questions. Answer correctly and proceed, but miss a question and you will lose time! Click The Code Quiz button to proceed to the site and give it try.",
    },
    {
      src: "./assets/Project2SS.jpg",
      url: "https://glacial-taiga-04215.herokuapp.com/",
      title: "Game Tracker",
      description:
        " √ - The Game Tracker will allow both casual and enthusiast gamers to track games that they want to play, games that they are currently playing, and games that they have played in the past all in one database.",
    },
    {
      src: "./assets/readMeGeneratorSS.jpg",
      url: "https://github.com/StevenSJones/readMeGenSeventhEdition",
      title: "The Readme Generator",
      description:
        "√ - The Readme generator is a command line interface app or CLI that creates a readme.md file for your web development project. The readme.md is a necessity if you are creating a site as it tells any user how to operate the site. As a CLI there is not a page to visit, so I provided a link to the Github repository for the project instead.",
    },
    {
      src: "./assets/workDaySchedulerSS.jpg",
      url: "https://stevensjones.github.io/WorkDayCalenderFifthEdition/",
      title: "The Workday Scheduler",
      description:
        "√ - The Work Day Scheduler allows you to write out your plans for the work day; 9-5. You can create a todo and then get rid of it when it is comleted. It also has a jumbotron that lights up yellow if you visit the site in the morning hours and blue in the evening.",
    },
  ];
  const content = projects.map((project) => {
    return (
      <Col>
        <Project
          title={project.title}
          url={project.url}
          src={project.src}
          description={project.description}
        />
      </Col>
    );
  });
  return (
    <Container>
    <Jumbotron>
    <Container>
      <h1>Gallery</h1>
      <hr />
      <p>
        This page is fully dedicated to showcasing 6 varying projects that I completed at the University of Arizona web-development program. Please take a moment to read a description of each project. 
      </p>
    </Container>
  </Jumbotron>
    <Container>
      <Row>{content}</Row>
    </Container>
    </Container>
  );
}

export default Gallery;
