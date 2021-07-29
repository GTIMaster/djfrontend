import "./App.css";
// import React, { useState, useEffect } from "react";
import React from "react";
// import Networking from "./components/Networking";
// import Hook1 from "./components/Hook1";
import Hook2 from "./components/Hook2";

function App() {
  // const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api/articles/", {
  //     method: "GET",
  //     headers: {
  //       "Content-type": "application/json",
  //       Authorization: "Token 61446d541486434f5b4bd6440b07024875e0d9f7",
  //     },
  //   })
  //     .then((resp) => resp.json())
  //     .then((resp) => setArticles(resp))
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <div className="App">
      {/* <Networking /> */}
      {/* <Hook1 /> */}
      <Hook2 />
      {/* <h1>Django and Reactjs Course</h1> */}
      {/* {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        );
      })} */}
    </div>
  );
}

export default App;
