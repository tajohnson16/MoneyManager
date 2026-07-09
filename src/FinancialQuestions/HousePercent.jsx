import React from 'react';
import PercentageQuestion from '../components/PercentageQuestion';

const HousePercent = () => (
  <PercentageQuestion
    ariaLabel="Housing percentage"
    defaultValue={31}
    description="It is recommended that you spend no more than 31% of your net income."
    monthlyAmountLabel="Housing per month"
    monthlyAmountSuffix=" (this includes utilities)"
    nextPath="/MoneyManager/car"
    storageKey="housePercent"
    title="What percentage of your net income would you like to spend on housing?"
  />
);

export default HousePercent;
