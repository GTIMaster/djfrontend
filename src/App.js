import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import MyClass from "./components/MyClass";

function App() {
  function clickapp() {
    alert("Class is Clicked from app.js file");
  }
  function Clickfunc() {
    alert("Button is clicked from app.js for functional component");
  }
  return (
    <div className="App">
      <Hello name="rone" myclick={Clickfunc} />
      <MyClass email="om2231@gmail.com" myclick={clickapp} />
    </div>
  );
}

export default App;
