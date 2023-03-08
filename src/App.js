import logo from "./logo.svg";
import vector from "./Vector.svg";
import Vector2 from "./Vector2.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="section1">
        <div className="container ">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={vector} className="App-first-vector" alt="vector" />
          <img src={Vector2} className="App-sec-vector" alt="vector" />
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </div>
      </section>
      <section className="section2"></section>
      <section className="section3"></section>
    </div>
  );
}

export default App;
