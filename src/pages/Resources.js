import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardColumns from "react-bootstrap/CardColumns";

function Resources() {
  return (
    <>
    <h1 className="justify-content-center text-shadow-light-font-light">Resources Utilized</h1>
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
              Whenever I encountered an error during coding the initial answer that I would find
              when I went to my favorite browser to perform a search would be a similar issue resolved (must have the green check
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
              W3schools is a website that I found w3schools to be invaluable in my daily problem solving and
              concept recpaps, both of which I performed daily during the
              program. The site is very well organized and easy to follow which
              makes it ideal for beginners and those well versed looking for a quick refresh.
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
              Slack is a communcation app used by myself and many others daily to communicate with other classmates,
              team members, or coworkers once I transition to a career in web
              development. I used it daily.
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
            <Card.Title>Sololearn</Card.Title>
            <Card.Text>
              Arguably the most useful resource that I employ is an app called
              Sololearn. I used this app as a place t both search for detailed examples of code
              and a deploy the code and see if it fit a particular need. The really convenient part of Sololearn is that you can employ code without having to set up the workspace before hand by running any commands at all and thus, it is ideal for the beginning coder.
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
              One of the uselful resources that I utilized; in regards to learning
              the details that I was unable to grasp in the coding program that
              I attended in 2020, was Youtube. Specifically, the JavaScript for
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
              web-dev world. Github aids with the organinzation of a project and keeps track of work done, frequency of work
              done, team projects, group participation and much, much more.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardColumns>
    </>
  );
}

export default Resources;
