import React from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import Card from 'react-bootstrap/Card';
import { Form, InputGroup, FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import useSessionStorage from '../components/SessionHook';
import { useHistory } from 'react-router-dom';

const CarPercent = props => {
    const [netSalary] = useSessionStorage('netSalary')
    const [carPercent, setCarPercent] = React.useState(
        sessionStorage.getItem('carPercent') || 10);

    React.useEffect(() => {
        sessionStorage.setItem('carPercent', carPercent);
    }, [carPercent])

    const handleChangeCarPercent = e => {
        setCarPercent(e.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
    }

    let history = useHistory();

    return (
        <Row className="justify-content-around py-0" style={{ marginTop: '20px' }} >
            <Card className="text-center">
                <Card.Header>Financials</Card.Header>
                <Card.Body>
                    <Card.Title>What percentage of your net income would you like to spend on a car?</Card.Title>
                    <Card.Text>
                        It is recommended that you spend no more than 10% of your net income
                    </Card.Text>
                    <Form onSubmit={handleSubmit}>
                        <InputGroup className="mb-3">
                            <Col xs="4">
                                <FormControl value={carPercent} size='sm' onChange={handleChangeCarPercent} aria-label="Housing Percentage" >
                                </FormControl>
                            </Col>
                            <Col xs="8">
                                <RangeSlider
                                    value={carPercent}
                                    onChange={handleChangeCarPercent}
                                    size='sm'
                                />
                            </Col>
                        </InputGroup>
                        <Card.Text>
                            Car per month at <b>{carPercent}%</b> (this includes insurance):<br /><b>${((netSalary * (carPercent / 100)) / 12).toFixed(2)}</b>
                        </Card.Text>
                        <Row className="justify-content-around py-0">
                            <Button variant="primary" onClick={() => history.goBack()}>Back</Button>
                            <Link to='spend'><Button variant="primary" type="submit">Next</Button></Link>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </Row>
    );
}

export default CarPercent;