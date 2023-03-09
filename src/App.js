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
          <div className="header">
            <h1 className="h1-honePage">נעים להכיר, Mento</h1>
            <p className="p-honePage">
              על כל משרת סטודנט וג׳וניור בהייטק יש עשרות ואף מאות מועמדים.
              <br></br>
              <br></br>
              הצטרפו אלינו לליווי אישי שנעשה על ידי מנטוריות ומנטורים מנוסים
              מהתעשיה, <br></br> ותקבלו כלים שיזניקו את הסיכויים שלכם למצוא את
              המשרה שאתם רוצים!
            </p>
            <br></br>
            <br></br>
            <button>להצטרפות</button>
          </div>
        </div>
      </section>
      <section className="section2"></section>
      <section className="section3"></section>
    </div>
  );
}

export default App;
