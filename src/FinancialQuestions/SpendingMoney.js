import React from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';
import { Form, InputGroup, FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import useSessionStorage from '../components/SessionHook';

const HousePercent = props => {
    const [netSalary] = useSessionStorage('netSalary')
    const [spendPercent, setCarPercent] = React.useState(
        sessionStorage.getItem('spendPercent') || 10);

    React.useEffect(() => {
        sessionStorage.setItem('spendPercent', spendPercent);
    }, [spendPercent])

    const handleChangeSpendPercent = e => {
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
                    <Card.Title>What percentage of your net income would you like to set aside for spending money?</Card.Title>
                    <Card.Text>
                        It is recommended that you spend no more than 10% of your net income
                    </Card.Text>
                    <Form onSubmit={handleSubmit}>
                        <InputGroup className="mb-3">
                            <Col xs="4">
                                <FormControl value={spendPercent} size='sm' onChange={handleChangeSpendPercent} aria-label="Housing Percentage" >
                                </FormControl>
                            </Col>
                            <Col xs="8">
                                <RangeSlider
                                    value={spendPercent}
                                    onChange={handleChangeSpendPercent}
                                    size='sm'
                                />
                            </Col>
                        </InputGroup>
                        <Card.Text>
                            Spending money per month at <b>{spendPercent}%</b>:<br /><b>${((netSalary * (spendPercent / 100)) / 12).toFixed(2)}</b>
                        </Card.Text>
                        <Row className="justify-content-around py-0">
                            <Button variant="primary" onClick={() => history.goBack()}>Back</Button>
                            <Link to='name'><Button variant="primary" type="submit">Next</Button></Link>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </Row>
    );
}

export default HousePercent;