import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState(0);
  const calculateAge = () => {
    if (!birthdate) {
      setAge(0);
      return;
    }
    const today = new Date();
    const birthdateDate = new Date(birthdate);
    let age = today.getFullYear() - birthdateDate.getFullYear();
    const month = today.getMonth() - birthdateDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
      age--;
    }
    setAge(age);
  };

  return (
    <>
      <div className="container">
        <div className="main-div">
          <h1>Age Calculator</h1>
          <h5>
            Age Calculator can calculate the age based on your Date of birth
          </h5>

          <div className="div2">
            <div className="div-dob">
              <h3>Date of Birth</h3>
              <input
                className="date-input"
                type="date"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
              <div>
                <button onClick={calculateAge}>Calculate Age</button>
                <button
                onClick={()=>{
                  setBirthdate('');
                  setAge(0);
                }}
                >Reset</button>
              </div>
            </div>
            <div className="div-output">
              <h3>Your age is : </h3>
              <h1>{age}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
