import React from 'react';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import PersonalCard from '../components/PersonalCard';
import MonthlySalaryCard from '../components/MonthlySalaryCard';
import Row from 'react-bootstrap/Row';
import useSessionStorage from '../components/SessionHook';
import CanvasJSReact from '../canvasjs.react';
import CurrencyFormat from 'react-currency-format';
import SavingsCard from '../components/SavingsCard';
import { Tabs, Tab } from 'react-bootstrap';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ResultsPage = props => {
    const [salary] = useSessionStorage('salary')
    const [status] = useSessionStorage('status')
    const [netSalary] = useSessionStorage('netSalary')
    const [housePercent] = useSessionStorage('housePercent')
    const [carPercent] = useSessionStorage('carPercent')
    const [spendPercent] = useSessionStorage('spendPercent')
    const [name] = useSessionStorage('name')
    const [profession] = useSessionStorage('profession')
    const [saving] = useSessionStorage('saving')

    const dataset = {
        house: (netSalary * (housePercent / 100)) / 12,
        car: (netSalary * (carPercent / 100)) / 12,
        spend: (netSalary * (spendPercent / 100)) / 12,
    }

    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "dark2", // "light1", "dark1", "dark2"
        title: {
            text: "Monthly Spending"
        },
        subtitles: [{
            text: "$" + (netSalary / 12).toFixed(2),
            verticalAlign: "center",
            fontSize: 24,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            innerRadius: "60%",
            indexLabel: "{label}: #percent%",
            percentFormatString: "##.##",
            yValueFormatString: "$####.00",
            showInLegend: "true",
            legendText: "{label}: {y}",
            startAngle: -90,
            dataPoints: [
                { y: dataset.house, label: "House" },
                { y: dataset.car, label: "Car" },
                { y: dataset.spend, label: "Spending" },
                { y: Number(saving), label: "Savings" }
            ]
        }]
    }

    const inlineStyle = {
        'marginLeft': 0,
        'marginRight': 0
    };

    return (
        <div>

            <Jumbotron>
                <h1 className="display-3 font-weight-bolder">{name}</h1>
                <h2><small className="text-muted">{profession}</small></h2>
                <Row className="justify-content-around py-0" style={inlineStyle}>
                    <PersonalCard text="Marital Status" value={status}></PersonalCard>
                    <PersonalCard text="Gross Salary" value={<CurrencyFormat value={salary} displayType={'text'} thousandSeparator={true} prefix={'$'} />}></PersonalCard>
                    <PersonalCard text="Estimated Net Salary" value={<CurrencyFormat value={netSalary} displayType={'text'} thousandSeparator={true} prefix={'$'} />}></PersonalCard>
                </Row>
            </Jumbotron>

            {/* Tab views for results */}
            <Tabs defaultActiveKey="monthly">

                {/* Monthly Spending Tab */}
                <Tab eventKey="monthly" title="Monthly Spending">
                    <div id={'Monthly'}>
                        <h1 style={{ textAlign: 'center' }} className="display-3 font-weight-bolder text-muted">- Monthly Spending -</h1>
                        <Row className="justify-content-around py-0" style={inlineStyle}>
                            <MonthlySalaryCard></MonthlySalaryCard>
                            <SavingsCard></SavingsCard>
                            <Card border={'secondary'} bg={'light'} style={{ width: '50rem', marginBottom: "20px" }}>
                                <CanvasJSChart options={options}></CanvasJSChart>
                            </Card>
                        </Row>
                    </div>
                </Tab>

                {/* Housing Tab */}
                <Tab eventKey="housing" title="Housing">
                    <div id={'Housing'}>
                        <h1 style={{ textAlign: 'center' }} className="display-3 font-weight-bolder text-muted">- Housing Section Coming Soon -</h1>
                    </div>
                </Tab>

                {/* Other Tab */}
                <Tab eventKey="car" title="Car">
                    <div id={'Car'}>
                        <h1 style={{ textAlign: 'center' }} className="display-3 font-weight-bolder text-muted">- Car Section Coming Soon -</h1>
                    </div>
                </Tab>
            </Tabs>

        </div>
    );
}

export default ResultsPage;