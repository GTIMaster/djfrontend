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


function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/articles/", {
      method: "GET",
      header: {
        "Content-type": "application/json",
        Authorization: "Token 61446d541486434f5b4bd6440b07024875e0d9f7",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setArticles(resp))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="App">
      <h1>Django and Reactjs Course</h1>

      {articles.map((article) => {
        return (
          <div key={Article.id}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        );
      })}
    </div>
  );
}
