import React from 'react';
import Card from 'react-bootstrap/Card';
import CurrencyFormat from 'react-currency-format';

const SavingsCard = props => {
    const numMonths = 6;

    return (
        <Card border='gray' bg={'light'} style={{ width: '18rem', marginBottom: "20px" }}>
            <h5 style={{ textAlign: "center", fontSize: "25px", padding: "25px 0", lineHeight: "2.0" }}>
                With an estimated monthly net salary of <span style={{ color: '#00b300' }}>
                    {<CurrencyFormat value={props.netSalary / 12} displayType={'text'} thousandSeparator={true} decimalScale={2} fixedDecimalScale={true} prefix={'$'} />}
                </span>, you could save <span style={{ color: '#00b300' }}>
                    {<CurrencyFormat value={props.saving * numMonths} displayType={'text'} thousandSeparator={true} decimalScale={2} fixedDecimalScale={true} prefix={'$'} />}
                </span> in {numMonths} months after expenses!
            </h5>
        </Card>
    );
}

export default SavingsCard;
