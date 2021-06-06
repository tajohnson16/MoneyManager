import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Jumbo(props) {
    return (
        <Jumbotron>
            <Row className="justify-content-center text-center py-2">
                <Col md={8} sm={12}>
                    <h1 className="display-3 font-weight-bolder">{props.title}</h1>
                    <h3 className="display-4 font-weight-light">{props.subTitle}</h3>
                </Col>
            </Row>
        </Jumbotron>
    );
}

export default Jumbo;