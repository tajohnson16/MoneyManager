import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Manage Your Money
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        This site was made by Tim Johnson
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;