export const ESTIMATED_TAX_RATE = 0.31;

const toNumber = value => {
  const number = Number(value);

  return Number.isFinite(number) ? number : 0;
};

export const calculateNetAnnualSalary = grossSalary =>
  toNumber(grossSalary) * (1 - ESTIMATED_TAX_RATE);

export const calculateMonthlyAmount = (netAnnualSalary, percentage) =>
  (toNumber(netAnnualSalary) * (toNumber(percentage) / 100)) / 12;

export const calculateMonthlySavings = (netAnnualSalary, percentages) => {
  const totalExpensePercentage = percentages.reduce(
    (total, percentage) => total + toNumber(percentage),
    0
  );

  return calculateMonthlyAmount(netAnnualSalary, 100 - totalExpensePercentage);
};
