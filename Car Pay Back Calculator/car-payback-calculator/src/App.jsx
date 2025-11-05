import { useState } from "react";
import "./App.css";

function App() {
  const [fuel1, setFuel1] = useState("PETROL");
  const [fuel2, setFuel2] = useState("CNG");
  const fuelOptions = ["Petrol", "Diesel", "CNG", "Hybrid", "Strong Hybrid"];

  // vehicle 1 inputs:
  const [vehicleCost1, setVehicleCost1] = useState("");
  const [fuel1Cost, setFuel1Cost] = useState("");
  const [milage1, setMilage1] = useState("");
  // vehicle 2 inputs:

  const [vehicleCost2, setVehicleCost2] = useState("");
  const [fuel2Cost, setFuel2Cost] = useState("");
  const [milage2, setMilage2] = useState("");
  //monthly run
  const [monthlyRun, setMonthlyRun] = useState("");

  // output state
  const [vehicle1MonthlyCost, setVehicle1MonthlyCost] = useState(null);
  const [vehicle2MonthlyCost, setVehicle2MonthlyCost] = useState(null);

  // output result
  const [payBackMonths, setPayBackMonths] = useState(null);

  // calculation
  const calculatePayback = () => {
    // vehicle 1
    const v1Cost = Number(vehicleCost1);
    const f1Cost = Number(fuel1Cost);
    const m1 = Number(milage1);

    //vehicle 2
    const v2Cost = Number(vehicleCost2);
    const f2Cost = Number(fuel2Cost);
    const m2 = Number(milage2);

    const run = Number(monthlyRun);

    // input validation

    if (!v1Cost || !f1Cost || !m2 || !v2Cost || !f2Cost || !m2 || !run) {
      alert("Please fill all input fileds");
      return;
    }
  };
  return (
    <>
      <div className="container-div">
        <div className="card-div">
          <div className="title-div">Title</div>
          <div className="input-div">
            <div className="input-div1">
              <label>Current Fuel Type </label>
              <select
                name="fuel-1 "
                value={fuel1}
                onChange={(e) => {
                  setFuel1(e.target.value);
                  setFuel2("");
                }}
              >
                {fuelOptions.map((fuel) => (
                  <option key={fuel} value={fuel}>
                    {fuel.toUpperCase()}
                  </option>
                ))}
              </select>
              <input
                type="number"
                placeholder="Price of vehicle"
                value={vehicleCost1}
                onChange={(e) => setVehicleCost1(e.target.value)}
              ></input>
              <input
                type="number"
                value={fuel1Cost}
                placeholder="Fuel Cost"
                onChange={(e) => setFuel1Cost(e.target.value)}
              ></input>
              <input
                type="number"
                placeholder="Milage"
                value={milage1}
                onChange={(e) => setMilage1(e.target.value)}
              ></input>
            </div>
            <div className="input-div2">
              <label>Compare with </label>
              <select
                name="fuel-2"
                value={fuel2}
                onChange={(e) => setFuel2(e.target.value)}
              >
                {fuelOptions
                  .filter((fuel) => fuel != fuel1)
                  .map((fuel) => (
                    <option key={fuel} value={fuel}>
                      {fuel.toUpperCase()}
                    </option>
                  ))}
              </select>
              <input
                placeholder="Price of Vehicle"
                type="number"
                value={vehicleCost2}
                onChange={(e) => setVehicleCost2(e.target.value)}
              ></input>
              <input
                placeholder="Fuel Cost"
                type="number"
                value={fuel2Cost}
                onChange={(e) => setFuel2Cost(e.target.value)}
              ></input>
              <input
                placeholder="Milage"
                value={milage2}
                type="number"
                onChange={(e) => setMilage2(e.target.value)}
              ></input>
            </div>
          </div>{" "}
          <input
            className="monthly-run"
            placeholder="Monthly Run"
            value={monthlyRun}
            onChange={(e) => setMonthlyRun(e.target.value)}
          ></input>
          <div className="button-div">
            <button onClick={calculatePayback}>Calculate</button>
          </div>
          <div className="result-div">Result</div>
        </div>
      </div>
    </>
  );
}

export default App;
