import React from 'react';
import PercentageQuestion from '../components/PercentageQuestion';

const SpendingMoney = () => (
  <PercentageQuestion
    ariaLabel="Spending percentage"
    defaultValue={10}
    description="It is recommended that you spend no more than 10% of your net income."
    monthlyAmountLabel="Spending money per month"
    nextPath="/MoneyManager/name"
    storageKey="spendPercent"
    title="What percentage of your net income would you like to set aside for spending money?"
  />
);

export default SpendingMoney;
