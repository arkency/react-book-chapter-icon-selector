import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Icon from "react-fa";

function Star(props) {
  const [label, updateLabel] = useState(props.label);
  const [lastClickedTimeoutId, updateLastClickedTimeoutId] = useState(null);

  useEffect(() => {
    if (props.label !== label) {
      clearTimeout(lastClickedTimeoutId);
      updateLabel(props.label);
      updateLastClickedTimeoutId(null);
    };
  }, [props.label]);

  function labelClicked() {
    const currentLabelIndex = props.labels.indexOf(label);
    let nextLabelIndex;

    if (currentLabelIndex !== 0 && !lastClickedTimeoutId) {
      nextLabelIndex = 0;
    } else {
      nextLabelIndex = (currentLabelIndex + 1) % props.labels.length;
    }
    const nextLabel = props.labels[nextLabelIndex];

    clearTimeout(lastClickedTimeoutId);
    const timeoutId = setTimeout(labelClicked2SecondsAgo, 2000);
    updateLabel(nextLabel);
    updateLastClickedTimeoutId(timeoutId);
  }

  function labelClicked2SecondsAgo() {
    updateLastClickedTimeoutId(null);
    if (props.onChange) {
      props.onChange(label);
    }
  }

  return (
    <Button bsSize="large" bsStyle="link" onClick={labelClicked}>
      <Icon name={label} />
    </Button>
  );
}

Star.defaultProps = {
  labels: [
    "star-o",
    "star",
    "star-half-empty",
    "exclamation-circle",
    "check",
    "question-circle",
    "exclamation-triangle",
    "plane",
    "soccer-ball-o"
  ],
  label: "star-o",
  onChange: function(label) {
    console.log(label);
  }
};

export default Star;
