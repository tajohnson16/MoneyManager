import React from 'react';
import PercentageQuestion from '../components/PercentageQuestion';

const CarPercent = () => (
  <PercentageQuestion
    ariaLabel="Car percentage"
    defaultValue={10}
    description="It is recommended that you spend no more than 10% of your net income."
    monthlyAmountLabel="Car per month"
    monthlyAmountSuffix=" (this includes insurance)"
    nextPath="/MoneyManager/spend"
    storageKey="carPercent"
    title="What percentage of your net income would you like to spend on a car?"
  />
);

export default CarPercent;
