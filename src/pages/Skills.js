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
          <Card.Header>
            <Button variant="secondary" size="lg" block>
              Block level button
            </Button>
          </Card.Header>
          <Card.Body>
            <Card.Title> Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          border="light"
          bg="{{ rgb(14, 9, 54) }}"
          text="{{ rgb(14, 9, 54) }}"
          style={{ width: "18rem" }}
        >
          <Card.Header>
            Header{" "}
            <Button variant="secondary" size="lg" block>
              Block level button
            </Button>
          </Card.Header>
          <Card.Body>
            <Card.Title>Hello</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          border="light"
          bg="{{ rgb(14, 9, 54) }}"
          text="{{ rgb(14, 9, 54) }}"
          style={{ width: "18rem" }}
        >
          <Card.Header>
            Header{" "}
            <Button variant="secondary" size="lg" block>
              Block level button
            </Button>
          </Card.Header>
          <Card.Body>
            <Card.Title>Hello</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          border="light"
          bg="{{ rgb(14, 9, 54) }}"
          text="{{ rgb(14, 9, 54) }}"
          style={{ width: "18rem" }}
        >
          <Card.Header>
            Header{" "}
            <Button variant="secondary" size="lg" block>
              Block level button
            </Button>
          </Card.Header>
          <Card.Body>
            <Card.Title>Hello</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          border="light"
          bg="{{ rgb(14, 9, 54) }}"
          text="{{ rgb(14, 9, 54) }}"
          style={{ width: "18rem" }}
        >
          <Card.Header>
            Header{" "}
            <Button variant="secondary" size="lg" block>
              Block level button
            </Button>
          </Card.Header>
          <Card.Body>
            <Card.Title>Hello</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardColumns>
    </>
  );
}

export default Skills;
