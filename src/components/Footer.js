import React from "react";
import Card from "react-bootstrap/Card";

export default function Footer(props) {
  return (
    <>
      <Card className="color-footer text-muted" sticky="bottom">
        <Card.Body>
          <Card.Text>
            <blockquote className="blockquote mb-0">
              <q>
                As an unremitting scholar, I am perpetually in search of ways to
                acquire and implement novel technologies..
              </q>
              <footer className="text-muted">
                &copy; Steven Jones 2020<cite title="Source Title"></cite>
              </footer>
            </blockquote>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
