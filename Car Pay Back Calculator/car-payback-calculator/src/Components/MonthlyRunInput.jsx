function MonthlyRunInput({ monthlyRun, setMonthlyRun }) {
  return (
    <input
      className="monthly-run"
      type="number"
      placeholder="Monthly Run (KM)"
      value={monthlyRun}
      onChange={(e) => setMonthlyRun(e.target.value)}
    />
  );
}

export default MonthlyRunInput;
