import {
  calculateMonthlyAmount,
  calculateMonthlySavings,
  calculateNetAnnualSalary,
} from './financials';

describe('financial calculations', () => {
  test('estimates annual net salary from gross salary', () => {
    expect(calculateNetAnnualSalary(100000)).toBe(69000);
  });

  test('calculates a monthly amount from a percentage of annual net salary', () => {
    expect(calculateMonthlyAmount(69000, 10)).toBe(575);
  });

  test('calculates savings after monthly expense percentages', () => {
    expect(calculateMonthlySavings(69000, [31, 10, 10])).toBe(2817.5);
  });
});
