import "bootstrap/dist/css/bootstrap.css";

import React, { useState } from "react";
import ReactDOM from "react-dom";
import Star from "./components/Star";

import { Grid, Row, Col, Button } from "react-bootstrap";
import Icon from "react-fa";

function Main(props) {
  const [emails, updateEmails] = useState([
        {
          id: 0,
          subject: "Big names using React.js today",
          label: "star-o",
          lastUpdated: new Date()
        },
        {
          id: 1,
          subject: "Lost in JavaScript and React tooling",
          label: "star-o",
          lastUpdated: new Date()
        },
        {
          id: 2,
          subject: "From Ruby to mobile through React.js?",
          label: "star-o",
          lastUpdated: new Date()
        },
        {
          id: 3,
          subject: "Browser Animations - icing on the cake",
          label: "star-o",
          lastUpdated: new Date()
        },
        {
          id: 4,
          subject:
            "Ryanair Travel Itinerary - Don't Forget You Must Check-in Online and Print Off your Boarding Pass",
          label: "plane",
          lastUpdated: new Date()
        },
        {
          id: 5,
          subject: "Fifa admits scandal deters new sponsors",
          label: "soccer-ball-o",
          lastUpdated: new Date()
        }
      ]);

  function onLabelChange(id, newLabel) {
    const newEmails = [...emails];
    newEmails[id].label = newLabel;
    newEmails[id].lastUpdated = new Date();
    updateEmails(newEmails);
  }

  function onRandomLabelAssign(id, reactEvent) {
    const newEmails = [...emails];
    newEmails[id].label = ["check", "question-circle", "exclamation-triangle"][
        Date.now() % 3
      ];
    newEmails[id].lastUpdated = new Date();
    updateEmails(newEmails);
  }

  return (
    <Grid>
      {emails.map(email =>
        <Row key={`row-${email.id}`}>
          <Col md={1}>
            <Star
              label={email.label}
              onChange={onLabelChange.bind(null, email.id)}
            />
          </Col>
          <Col md={10}>
            {email.subject}

            <div className="timestamp">
              {email.lastUpdated.toISOString()}
            </div>
          </Col>
          <Col md={1}>
            <Button
              bsSize="large"
              bsStyle="link"
              onClick={onRandomLabelAssign.bind(null, email.id)}
            >
              <Icon name="random" />
            </Button>
          </Col>
        </Row>
      )}
    </Grid>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
