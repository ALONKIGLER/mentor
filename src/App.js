import logo from "./logo.svg";
import vector from "./Vector.svg";
import Vector2 from "./Vector2.svg";
import imagForom from "./formImage.svg";
import "./App.css";
import { useState, useEffect, useRef } from "react";

function App() {
  const colors = [
    <div className="hmlazot">המליצו עלינו ... הדס</div>,
    <div className="hmlazot">המליצו עלינו ... רוני</div>,
    <div className="hmlazot">המליצו עלינו ... ליאט</div>,
  ];
  const delay = 2500;

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

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
      <section className="section2">
        <div className="header-section2">
          <h1 className="h1-section2">?ג׳וניור, במה נוכל לעזור לך</h1>
        </div>

        <div className="grid-center">
          <div className="grid-section2">
            <span>שדרוג קורות החיים</span>
            <span>שדרוג חתימה דיגיטלית</span>
            <span>הכנה לראיונות</span>
            <span>קבלת משרות ל-whatsapp </span>
            <span>נטוורקינג </span>
            <span>ליווי אישי ע״י מנטור</span>
          </div>
        </div>

        <div className="footer-section2">
          <h1 className="foo-section2">?רוצה להצטרף אלינו</h1>
          <button className="button-section2">כן</button>
        </div>
      </section>
      <section className="section3">
        <div className="header-section3">
          <h1 className="h1-section3">...סיפרו עלינו</h1>
        </div>
        <div className="slideshow-s2">
          <div className="slideshow">
            <div
              className="slideshowSlider"
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
              {colors.map((backgroundColor, index) => (
                <div className="slide" key={index}>
                  {backgroundColor}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-section3">
          <h1 className="foo-section2">?רוצה גם להמליץ עלינו</h1>
          <button className="button-section3">כן</button>
        </div>
      </section>
      <section className="section4">
        <div className="header-section4">
          <h1 className="h1-section4"> Our Mento’rs</h1>
        </div>

        <div className="footer-section4">
          <h1 className="foo-section4">?רוצה להצטרף אלינו בתור מנטור</h1>
          <button className="button-section4">להצטרפות כמנטור</button>
        </div>
      </section>
      <section className="section5">
        <div className="container4 ">
          <img src={imagForom} className="App-first-vector" alt="vector" />
        </div>
      </section>
    </div>
  );
}

export default App;
