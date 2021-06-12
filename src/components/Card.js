import React from 'react';
import Card from 'react-bootstrap/Card';

const InfoCard = props => {
    return (
        <Card border={'secondary'} bg={'light'} style={{ width: '18rem', marginBottom: "20px" }}>
            <Card.Img variant="top" src={props.asset} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default InfoCard;