import React from 'react';
import Card from 'react-bootstrap/Card';
import CurrencyFormat from 'react-currency-format';

const MonthlySalaryCard = props => {
    return (
        <Card border='gray' bg={'light'} style={{ width: '18rem', marginBottom: "20px" }}>
            <h5 style={{ textAlign: "center", fontSize: "25px", padding: "25px 10px", lineHeight: "2.0" }}>
                With a yearly net salary of <a style={{ color: '#00b300' }}>
                    {<CurrencyFormat value={props.netSalary} displayType={'text'} thousandSeparator={true} prefix={'$'} />}
                </a>, you will have
                a monthly net salary of <a style={{ color: '#00b300' }}>
                    {<CurrencyFormat value={(props.netSalary / 12).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} />}
                </a>.
            </h5>
        </Card>
    );
}

export default MonthlySalaryCard;