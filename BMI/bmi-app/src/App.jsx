import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const reload=()=>{
    window.location.reload();
  };

  // logic
  let calBmi = (e) => {
    e.preventDefault();
    if (weight == 0 || height == 0) {
      alert("Please enter valid weight and height");
    } else {
      let bmi = weight / ((height / 100)**2);
      setBmi(bmi.toFixed(1));
      if (bmi < 18.5) {
        setMessage("You are under weight");
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage("You are fit");
      } else {
        setMessage("You are over weight");
      }
    }
  };
  return (
    <>
      <div className="screen">
        <div className="container">
          <div className="div">
            <h2>BMI Calculator</h2>

            <form onSubmit={calBmi}>
              <div className="height-text div">
                <label>Weight in KG</label>
                <input
                  type="text"
                  placeholder="Enter weight"
                  value={weight}
                  onChange={(e) => setWeight(parseFloat(e.target.value))}
                />
              </div>
              <div>
                <label>Height in CM</label>
                <br/>
                <input
                  type="text"
                  placeholder="Enter height in CM"
                  value={height}
                  onChange={(e) => setHeight(parseFloat(e.target.value))}
                />
              </div>
              <div>
                <button className="btn" type="submit">
                  Submit
                </button>
                <button className="btn" onClick={reload} type="button">
                  Reload
                </button>
              </div>

              <div className="div">
                <h3>Your BMI is : {bmi} </h3>
                <p className="message">{message}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
