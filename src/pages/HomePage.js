import React from 'react';
import { Link } from 'react-router-dom';
import '../css/HomePage.css';

import Jumbo from '../components/Jumbo';
import Card from '../components/Card';
import Row from 'react-bootstrap/Row';

import assessment from '../assets/assessment.png';
import results from '../assets/results.png';

const card1 = {
    title: 'Take the assessment now!',
    text: 'This assessment will allow us to get a feel for your current financial stance.'
};

const card2 = {
    title: 'See your results now!',
    text: 'See your current financial model based on the answers from your assessment.'
}

const inlineStyle = {
    'marginLeft': 0,
    'marginRight': 0
};

const HomePage = props => {
    var buttonClass = "";
    if (props.disableButton) {
        buttonClass = 'results disableButton'
    } else {
        buttonClass = 'results hvr-grow-shadow'
    }

    const disableClick = (event) => {
        if (props.disableButton) {
            event.preventDefault();
        }
    }

    return (
        <div>
            <Jumbo title={props.title} subTitle={props.subTitle} />
            <Row className="justify-content-around py-0" style={inlineStyle}>
                <Link className='hvr-grow-shadow' to='/MoneyManager/assessment' style={{ textDecoration: 'none', color: 'black' }}><Card asset={assessment} title={card1.title} text={card1.text} /></Link>
                <Link onClick={(event) => disableClick(event)} className={buttonClass} to='/MoneyManager/results' style={{ textDecoration: 'none', color: 'black' }}><Card asset={results} title={card2.title} text={card2.text} /></Link>
            </Row>
        </div>
    )
}

export default HomePage