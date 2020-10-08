import React from "react";
import Card from "react-bootstrap/Card";

export default function Quote() {
  return (
    <>
      <Card sticky="bottom" collapseOnSelect expand="lg" bg="dark" variant="info">
        <Card.Header>Quote</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {" "}
              s an unremitting scholar, I am perpetually in search of ways to
              acquire and implement novel technologies..{" "}
            </p>
            <footer className="blockquote-footer">
              Steven Jones <cite title="Source Title"></cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </>
  );
}
