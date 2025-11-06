import { useState } from "react";
import "./App.css";

function App() {
  const [fuel1, setFuel1] = useState("Petrol");
  const [fuel2, setFuel2] = useState("CNG");

  const fuelOptions = ["Petrol", "Diesel", "CNG", "Hybrid", "Strong Hybrid"];

  // Vehicle 1 inputs
  const [vehicleCost1, setVehicleCost1] = useState("");
  const [fuel1Cost, setFuel1Cost] = useState("");
  const [milage1, setMilage1] = useState("");

  // Vehicle 2 inputs
  const [vehicleCost2, setVehicleCost2] = useState("");
  const [fuel2Cost, setFuel2Cost] = useState("");
  const [milage2, setMilage2] = useState("");

  // Monthly run
  const [monthlyRun, setMonthlyRun] = useState("");

  // Output states
  const [vehicle1MonthlyCost, setVehicle1MonthlyCost] = useState(null);
  const [vehicle2MonthlyCost, setVehicle2MonthlyCost] = useState(null);
  const [payBackMonths, setPayBackMonths] = useState(null);

  // Reset function
  const handleReset = () => {
    setVehicleCost1("");
    setFuel1Cost("");
    setMilage1("");
    setVehicleCost2("");
    setFuel2Cost("");
    setMilage2("");
    setMonthlyRun("");
    setVehicle1MonthlyCost(null);
    setVehicle2MonthlyCost(null);
    setPayBackMonths(null);
  };

  // Calculation
  const calculatePayback = () => {
    const v1Cost = Number(vehicleCost1);
    const f1Cost = Number(fuel1Cost);
    const m1 = Number(milage1);

    const v2Cost = Number(vehicleCost2);
    const f2Cost = Number(fuel2Cost);
    const m2 = Number(milage2);

    const run = Number(monthlyRun);

    // Validation
    if (!v1Cost || !f1Cost || !m1 || !v2Cost || !f2Cost || !m2 || !run) {
      alert("Please fill all input fields");
      return;
    }

    // Monthly fuel cost
    const v1Monthly = (run / m1) * f1Cost;
    const v2Monthly = (run / m2) * f2Cost;

    const monthlyCostDifference = Math.abs(v1Monthly - v2Monthly);
    const vehicleCostDifference = Math.abs(v1Cost - v2Cost);

    // If vehicle price same
    if (vehicleCostDifference === 0) {
      alert(
        `There is no price difference. Choose ${
          v1Monthly < v2Monthly ? fuel1 : fuel2
        } vehicle`,
      );
    }

    // Payback calculation (avoid divide by 0)
    const payback =
      monthlyCostDifference === 0
        ? 0
        : vehicleCostDifference / monthlyCostDifference;

    setVehicle1MonthlyCost(v1Monthly);
    setVehicle2MonthlyCost(v2Monthly);
    setPayBackMonths(payback);
  };

  return (
    <div className="container-div">
      <div className="card-div">
        <div className="title-div">Fuel Cost Comparison</div>

        <div className="input-div">
          {/* Vehicle 1 */}
          <div className="input-div1">
            <label>Current Fuel Type</label>
            <select
              value={fuel1}
              onChange={(e) => {
                setFuel1(e.target.value);
                setFuel2("");
              }}
            >
              {fuelOptions.map((fuel) => (
                <option key={fuel} value={fuel}>
                  {fuel}
                </option>
              ))}
            </select>

            <input
              type="number"
              placeholder="Vehicle Price"
              value={vehicleCost1}
              onChange={(e) => setVehicleCost1(e.target.value)}
            />

            <input
              type="number"
              placeholder="Fuel Price"
              value={fuel1Cost}
              onChange={(e) => setFuel1Cost(e.target.value)}
            />

            <input
              type="number"
              placeholder="Mileage (km/l)"
              value={milage1}
              onChange={(e) => setMilage1(e.target.value)}
            />
          </div>

          {/* Vehicle 2 */}
          <div className="input-div2">
            <label>Compare With</label>
            <select value={fuel2} onChange={(e) => setFuel2(e.target.value)}>
              {fuelOptions
                .filter((fuel) => fuel !== fuel1)
                .map((fuel) => (
                  <option key={fuel} value={fuel}>
                    {fuel}
                  </option>
                ))}
            </select>

            <input
              type="number"
              placeholder="Vehicle Price"
              value={vehicleCost2}
              onChange={(e) => setVehicleCost2(e.target.value)}
            />

            <input
              type="number"
              placeholder="Fuel Price"
              value={fuel2Cost}
              onChange={(e) => setFuel2Cost(e.target.value)}
            />

            <input
              type="number"
              placeholder="Mileage (km/l)"
              value={milage2}
              onChange={(e) => setMilage2(e.target.value)}
            />
          </div>
        </div>

        {/* Monthly Run */}
        <input
          className="monthly-run"
          type="number"
          placeholder="Monthly Run (km)"
          value={monthlyRun}
          onChange={(e) => setMonthlyRun(e.target.value)}
        />

        {/* Buttons */}
        <div className="button-div">
          <button className="btn-reset" onClick={handleReset}>
            Reset
          </button>
          <button className="btn-calculate" onClick={calculatePayback}>
            Calculate
          </button>
        </div>

        {/* Result Section */}
        {vehicle1MonthlyCost !== null && payBackMonths !== null && (
          <div className="result-div">
            <div>
              Monthly running cost of {fuel1}: ₹{vehicle1MonthlyCost.toFixed(2)}
            </div>

            <div>
              Monthly running cost of {fuel2}: ₹{vehicle2MonthlyCost.toFixed(2)}
            </div>

            <div>Time required to recover extra money:</div>

            <div className="result-year">
              {(() => {
                const years = Math.floor(payBackMonths / 12);
                const remainingMonthsDecimal = payBackMonths % 12;
                const months = Math.floor(remainingMonthsDecimal);
                const days = Math.round((remainingMonthsDecimal - months) * 30);
                return `${years} years ${months} months ${days} days`;
              })()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
