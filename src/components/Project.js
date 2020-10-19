import React from "react";
import { Card, CardGroup, Container, Button } from "react-bootstrap";

export default function Project(props) {
  const handleClick = event => {
    let url = event.target.dataset.url
    window.open(url, '_blank');
  }

  return (
    <Container className="jumbo-border">
    <CardGroup>
      <Card style={{width:"350px"}}>
        <Card.Img className="" variant="top" src={props.src} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <hr />
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button className="dub-border" onClick={handleClick} data-url={props.url} variant="dark">Go to Site</Button>
        </Card.Footer>
      </Card>
    </CardGroup>
    </Container>
  );
}
