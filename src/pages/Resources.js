import React from "react";
import { Jumbotron, Container, Row, Col, Image } from "react-bootstrap";

function Resources() {
  return (
    <Container>
      <Jumbotron className="jumbo-border">
        <Container>
          <h1 className="color-welcome">Resources Utilized</h1>
          <hr />
          <p>
            While learning how to code fully remotely I was forced to utilize a
            set of resources, many of which were new to me and some of which I
            was familiar with. Below you will find the compelation of my primary
            resources used and how I used them.
          </p>
        </Container>
      </Jumbotron>

      <Container>
        <h2 className="text-center white-text">w3schools</h2>
        <Row>
          <Col>
            <p className="text-right white-text">
              W3schools is a website that I found w3schools to be invaluable in
              my daily problem solving and concept recpaps, both of which I
              performed daily during the program. The site is very well
              organized and easy to follow which makes it ideal for beginners
              and those well versed looking for a quick refresh.
            </p>
          </Col>
          <Col>
            <Image></Image>
          </Col>
        </Row>
        <h2 className="text-center white-text">Stackoverflow</h2>
        <Row>
          <Col>
            <Image></Image>
          </Col>
          <Col>
            <p className="text-left white-text">
              Whenever I encountered an error during coding the initial answer
              that I would find when I went to my favorite browser to perform a
              search would be a similar issue resolved on Stackoverflow.com. The
              article must have the green check mark on the left of the query
              that indicates that the issue is resolved or else they likely have
              no answers for you, trust me.
            </p>
          </Col>
        </Row>
        <h2 className="text-center white-text">Slack</h2>
        <Row>
          <Col>
            <p className="text-right white-text">
              Slack is a communcation app used by myself and many others daily
              to communicate with other classmates, team members, or coworkers
              once I transition to a career in web development. I used it daily.
            </p>
          </Col>
          <Col>
            <Image></Image>
          </Col>
        </Row>
        <h2 className="text-center white-text">Sololearn</h2>
        <Row>
          <Col>
            <Image></Image>
          </Col>
          <Col>
            <p className="text-left white-text">
              Arguably the most useful resource that I employ is an app called
              Sololearn. I used this app as a place t both search for detailed
              examples of code and a deploy the code and see if it fit a
              particular need. The really convenient part of Sololearn is that
              you can employ code without having to set up the workspace before
              hand by running any commands at all and thus, it is ideal for the
              beginning coder.
            </p>
          </Col>
        </Row>
        <h2 className="text-center white-text">Youtube</h2>
        <Row>
          <Col>
            <p className="text-right white-text">
              One of the uselful resources that I utilized; in regards to
              learning the details that I was unable to grasp in the coding
              program that I attended in 2020, was Youtube. Specifically, the
              JavaScript for beginners videos by EJ Media; who also has other
              tutorials centered around coding and learning the specifics of a
              language.
            </p>
          </Col>
          <Col>
            <Image></Image>
          </Col>
        </Row>
        <h2 className="text-center white-text">Documentation</h2>
        <Row>
          <Col>
            <Image></Image>
          </Col>
          <Col>
            <p className="text-left white-text">
              During class I spent copious amounts of time reading the
              documetation for the different parts of JavaScript and web-dev in
              general. The docs is where you would look to find how to use some
              new peice of technology, a refresher on something that you have
              already done or a update on something that has been implemented in
              the past and has been modified. Reading the docs is skill in
              itself.
            </p>
          </Col>
        </Row>
        <h2 className="text-center white-text">Github</h2>
        <Row>
          <Col>
            <p className="text-right white-text">
              Github is where the work that I did in class is complied for
              future reference by myself or anyone looking into my doings in the
              web-dev world. Github aids with the organinzation of a project and
              keeps track of work done, frequency of work done, team projects,
              group participation and much, much more.
            </p>
          </Col>
          <Col>
            <Image></Image>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resources;
