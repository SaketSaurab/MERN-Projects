import { useState } from "react";
import VehicleForm from "./components/VehicleForm";
import ActionButtons from "./components/ActionButtons";
import MonthlyRunInput from "./components/MonthlyRunInput";
import ResultCard from "./components/ResultCard";
import { fuelOptions } from "./constants/fuelOptions";
import { calculateFuelComparison } from "./utils/calculations";
import "./styles/App.css";

function App() {
  const [fuel1, setFuel1] = useState("Petrol");
  const [fuel2, setFuel2] = useState("CNG");

  const [vehicleCost1, setVehicleCost1] = useState("");
  const [fuel1Cost, setFuel1Cost] = useState("");
  const [milage1, setMilage1] = useState("");

  const [vehicleCost2, setVehicleCost2] = useState("");
  const [fuel2Cost, setFuel2Cost] = useState("");
  const [milage2, setMilage2] = useState("");

  const [monthlyRun, setMonthlyRun] = useState("");

  const [vehicle1MonthlyCost, setVehicle1MonthlyCost] = useState(null);
  const [vehicle2MonthlyCost, setVehicle2MonthlyCost] = useState(null);
  const [payBackMonths, setPayBackMonths] = useState(null);

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

  const handleCalculate = () => {
    const result = calculateFuelComparison({
      vehicleCost1: Number(vehicleCost1),
      fuel1Cost: Number(fuel1Cost),
      milage1: Number(milage1),
      vehicleCost2: Number(vehicleCost2),
      fuel2Cost: Number(fuel2Cost),
      milage2: Number(milage2),
      monthlyRun: Number(monthlyRun),
    });

    setVehicle1MonthlyCost(result.v1Monthly);
    setVehicle2MonthlyCost(result.v2Monthly);
    setPayBackMonths(result.payback);
  };

  return (
    <div className="container-div">
      <div className="card-div">
        <h2 className="title-div">Fuel Cost Comparison</h2>

        <div className="input-div">
          <VehicleForm
            title="Current Fuel Type"
            fuel={fuel1}
            setFuel={setFuel1}
            fuelOptions={fuelOptions}
            vehicleCost={vehicleCost1}
            setVehicleCost={setVehicleCost1}
            fuelCost={fuel1Cost}
            setFuelCost={setFuel1Cost}
            milage={milage1}
            setMilage={setMilage1}
          />

          <VehicleForm
            title="Compare With"
            fuel={fuel2}
            setFuel={setFuel2}
            fuelOptions={fuelOptions}
            vehicleCost={vehicleCost2}
            setVehicleCost={setVehicleCost2}
            fuelCost={fuel2Cost}
            setFuelCost={setFuel2Cost}
            milage={milage2}
            setMilage={setMilage2}
            filterFuel={fuel1}
          />
        </div>

        <MonthlyRunInput
          monthlyRun={monthlyRun}
          setMonthlyRun={setMonthlyRun}
        />

        <ActionButtons onReset={handleReset} onCalculate={handleCalculate} />

        <ResultCard
          fuel1={fuel1}
          fuel2={fuel2}
          vehicle1MonthlyCost={vehicle1MonthlyCost}
          vehicle2MonthlyCost={vehicle2MonthlyCost}
          payBackMonths={payBackMonths}
        />
      </div>
    </div>
  );
}

export default App;
