import React from 'react';
import Card from 'react-bootstrap/Card';

function PersonalCard(props) {
    return (
        <Card border='gray' bg={'light'} style={{ width: '18rem', marginBottom: "20px" }}>
            <h5 style={{ marginLeft: "10px" }}><small className="text-muted"><b>{props.text}</b></small></h5>
            <h5 style={{ textAlign: "center", fontSize: "25px", padding: "25px 0", color: "#00b300" }}><b>{props.value}</b></h5>
        </Card>
    );
}

export default PersonalCard;