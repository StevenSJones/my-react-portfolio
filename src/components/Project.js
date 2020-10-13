import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";

export default function Project(props) {
  return (
    <Container>
    <CardGroup>
      <Card style={{width:"350px"}}>
        <Card.Img className="" variant="top" src={props.src} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <hr />
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          {/* <Link to={props.url}>{props.title}</Link> */}
          {/* to is url */}
        </Card.Footer>
      </Card>
    </CardGroup>
    </Container>
  );
}
