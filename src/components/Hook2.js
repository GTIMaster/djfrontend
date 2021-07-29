import React from "react";

function Hook2() {
  const bioData = [
    {
      id: 0,
      myName: "john",
      age: 26,
    },
    {
      id: 1,
      myName: "jack",
      age: 35,
    },
    {
      id: 2,
      myName: "mike",
      age: 20,
    },
    {
      id: 3,
      myName: "Clark",
      age: 25,
    },
  ];
  console.log(bioData);
  return (
    <>
      {bioData.map((curElm) => {
        return (
          <div>
            <h2>
              id : {curElm.id} Name : {curElm.myName} age : {curElm.age}{" "}
            </h2>
          </div>
        );
      })}
    </>
  );
}

export default Hook2;
