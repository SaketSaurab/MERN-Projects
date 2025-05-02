import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="screen">
        <div className="container">
          <div className="div">BMI Calculator</div>
          <div className="weight-text div">Weight in KG</div>
          <div className="weight-input div input"></div>

          <div className="height-text div">Weight in KG</div>
          <div className="height-input div input"></div>
          <div className="div">
            <button className="button">Submit</button>
          </div>
          <div className="div">
           <button className="button">Reload</button>
          </div>

          <div className="div">Your BMI is : </div>
        </div>
      </div>
    </>
  );
}

export default App;
