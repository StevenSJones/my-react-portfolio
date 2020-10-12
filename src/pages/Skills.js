import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardColumns from "react-bootstrap/CardColumns";

function Skills() {
  return (
    <>
      <CardColumns>
        <Card
          bg="dark"
          text="light"
          style={{ width: "18rem" }}
          className="mb-2"
        >
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Stackoverflow </Card.Title>
            <Card.Text>
              Whenever I encountered an error the initial site that I would see
              when I went to my favorite browser to perform a search would
              innevitably be a similar issue resolved (must have the green check
              mark that indicates that the issue is resolved or else they likely
              have no answers for you, trust me) on Stackoverflow.com.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          border="light"
          bg="{{ rgb(14, 9, 54) }}"
          text="{{ rgb(14, 9, 54) }}"
          style={{ width: "18rem" }}
        >
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>w3schools</Card.Title>
            <Card.Text>
              I found w3schools to be invaluable in my daily problem solving and
              concept recpaps, both of which I performed daily during the
              program. The site is very well organized and easy to follow which
              makes it ideal for beginners.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          border="light"
          bg="{{ rgb(14, 9, 54) }}"
          text="{{ rgb(14, 9, 54) }}"
          style={{ width: "18rem" }}
        >
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Slack</Card.Title>
            <Card.Text>
              Slack is used by myself to communicate with other classmates or
              team members or coworkers once I transition to a career in web
              development. I used it daily and would've been lost without it.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          bg="dark"
          text="light"
          style={{ width: "18rem" }}
          className="mb-2"
        >
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>SOLOLEARN</Card.Title>
            <Card.Text>
              Arguably the most useful resource that I employ is an app called
              SOLOLEARN. I used this app to search for detailed examples of code
              and a place to apply the code and see if it fit my quandry.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          border="light"
          bg="{{ rgb(14, 9, 54) }}"
          text="{{ rgb(14, 9, 54) }}"
          style={{ width: "18rem" }}
        >
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Youtube</Card.Title>
            <Card.Text>
              One of the main resources that I utilized; in regards to learning
              the details that I was unable to grasp in the coding program that
              I attended in 2020 was youtube. Specifically, the JavaScript for
              beginners videos by EJ Media; who also has other tutorials
              centered around coding and learning the specifics of a language.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          bg="dark"
          text="light"
          style={{ width: "18rem" }}
          className="mb-2"
        >
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Documentation</Card.Title>
            <Card.Text>
              During class I spent copious amounts of time reading the
              documetation for the different parts of JavaScript and web-dev in
              general. The docs is where you would look to find how to use some
              new peice of technology, a refresher on something that you have
              already done or a update on something that has been implemented in
              the past and has been modified. Reading the docs is skill in
              itself.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          border="light"
          bg="{{ rgb(14, 9, 54) }}"
          text="{{ rgb(14, 9, 54) }}"
          style={{ width: "18rem" }}
        >
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Github</Card.Title>
            <Card.Text>
              Github is where the work that I did in class is complied for
              future reference by myself or anyone looking into my doings in the
              web-dev world. Github keeps track of work done, frequency of work
              done, team projects and group participation and much more.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardColumns>
    </>
  );
}

export default Skills;
