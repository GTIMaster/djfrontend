import React, { useState } from "react";

function Hook1() {
  const [myName, setMyName] = useState("hello GTI ");
  const getchange = () => {
    setMyName("GTIMaster");
  };
  return (
    <div>
      <h1>{myName}</h1>
      <button onClick={getchange} type="submit">
        click me{" "}
      </button>
    </div>
  );
}

export default Hook1;
