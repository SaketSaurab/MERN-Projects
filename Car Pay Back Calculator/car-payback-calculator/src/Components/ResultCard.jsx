function ResultCard({
  fuel1,
  fuel2,
  vehicle1MonthlyCost,
  vehicle2MonthlyCost,
  payBackMonths,
}) {
  if (
    vehicle1MonthlyCost === null ||
    vehicle2MonthlyCost === null ||
    payBackMonths === null
  ) {
    return null;
  }

  const years = Math.floor(payBackMonths / 12);
  const remainingMonthsDecimal = payBackMonths % 12;
  const months = Math.floor(remainingMonthsDecimal);
  const days = Math.round((remainingMonthsDecimal - months) * 30);

  return (
    <div className="result-div">
      <div>
        Monthly running cost of {fuel1} vehicle is : ₹
        {vehicle1MonthlyCost.toFixed(2)}
      </div>

      <div>
        Monthly running cost of {fuel2} vehicle is : ₹
        {vehicle2MonthlyCost.toFixed(2)}
      </div>

      <div>Time required to recover extra money:</div>

      <div className="result-year">
        {years} year {months} months {days} days
      </div>
    </div>
  );
}

export default ResultCard;
