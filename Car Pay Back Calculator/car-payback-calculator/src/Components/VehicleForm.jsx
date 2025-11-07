function VehicleForm({
  title,
  fuel,
  setFuel,
  fuelOptions,
  vehicleCost,
  setVehicleCost,
  fuelCost,
  setFuelCost,
  milage,
  setMilage,
  filterFuel,
}) {
  return (
    <div className="input-div1">
      <label>{title}</label>

      <select value={fuel} onChange={(e) => setFuel(e.target.value)}>
        {fuelOptions
          .filter((f) => (filterFuel ? f !== filterFuel : true))
          .map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </select>

      <input
        type="number"
        placeholder="Vehicle Price"
        value={vehicleCost}
        onChange={(e) => setVehicleCost(e.target.value)}
      />

      <input
        type="number"
        placeholder="Fuel Price"
        value={fuelCost}
        onChange={(e) => setFuelCost(e.target.value)}
      />

      <input
        type="number"
        placeholder="Mileage (KM/L)"
        value={milage}
        onChange={(e) => setMilage(e.target.value)}
      />
    </div>
  );
}

export default VehicleForm;
