export const calculateFuelComparison = ({
  vehicleCost1,
  fuel1Cost,
  milage1,
  vehicleCost2,
  fuel2Cost,
  milage2,
  monthlyRun,
}) => {
  const v1Monthly = (monthlyRun / milage1) * fuel1Cost;
  const v2Monthly = (monthlyRun / milage2) * fuel2Cost;

  const monthlyDiff = Math.abs(v1Monthly - v2Monthly);
  const vehicleDiff = Math.abs(vehicleCost1 - vehicleCost2);

  const payback = monthlyDiff === 0 ? 0 : vehicleDiff / monthlyDiff;

  return {
    v1Monthly,
    v2Monthly,
    payback,
  };
};
