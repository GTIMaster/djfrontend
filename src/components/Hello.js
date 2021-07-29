import React from "react";

function Hello(props) {
  return (
    <div>
      <h1>We are functional componenet {props.name}</h1>
      <button onClick={props.myclick}>Clickfunction</button>
    </div>
  );
}

export default Hello;
