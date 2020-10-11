import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Project(props) {
  const projects = [
    {
      src: "./assets/burgerSS.jpg",
      url: "",
      title: "Burger app",
      description: "√ - The Burger App allows you to choose from the burgers listed. You can then save or devour the burger. Click The Burger App."
    },
    {
      src: "./assets/project1.jpg",
      url: "",
      title: "City Info",
      description: "√ - City Info allows the user to look up city information using API calls. Perhaps you are visiting a new city and would like to know a few of the activities in the area that weekend then this app is for you. Click the Project 1 button to proceed to the site.",
    },
    {
      src: "./assets/codeQuizSS.jpg",
      url: "",
      title: "The Code Quiz",
      description: "√ - The Code Quiz tests the users knowledge with a series of questions. Answer correctly and proceed, but miss a question and you will lose time! Click The Code Quiz button to proceed to the site.",
    },
    {
      src: "./assets/Project2SS.jpg",
      url: "",
      title: "Game Tracker",
      description: " √ - This app will allow both casual and enthusiast gamers to track games that they want to play, games that they are currently playing, and games that they have completed.",
    },
    {
      src: "./assets/readMeGeneratorSS.jpg",
      url: "",
      title: "The Readme Generator",
      description: "√ - The Readme generator is a command line interface app or CLI that creates a readme.md file for your web development project. As a CLI there is not page to visit.",
    },
    {
      src: "./assets/workDaySchedulerSS.jpg",
      url: "",
      title: "The Workday Scheduler",
      description: "√ - The Work Day Scheduler allows you to write out your plans for the work day; 9-5. You can create a todo and then get rid of it when it is comleted. It also has a jumbotron the lights up yellow if you visit the site in the morning and blue for the evening.",
    },
  ];
  
  return (
    
    <CardGroup>
      <Card>
        <Card.Img className="" variant="top" src={props.src} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          {/* <Link to={props.url}>{props.title}</Link> */}
          {/* to is url */}
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}
