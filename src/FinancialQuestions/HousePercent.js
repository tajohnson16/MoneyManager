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
    const [housePercent, setHousePercent] = React.useState(
        sessionStorage.getItem('housePercent') || 31);

    React.useEffect(() => {
        sessionStorage.setItem('housePercent', housePercent);
    }, [housePercent])

    const handleChangeHousePercent = e => {
        setHousePercent(e.target.value)
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
                    <Card.Title>What percentage of your net income would you like to spend on housing?</Card.Title>
                    <Card.Text>
                        It is recommended that you spend no more than 31% of your net income
                    </Card.Text>
                    <Form onSubmit={handleSubmit}>
                        <InputGroup className="mb-3">
                            <Col xs="4">
                                <FormControl value={housePercent} size='sm' onChange={handleChangeHousePercent} aria-label="Housing Percentage" >
                                </FormControl>
                            </Col>
                            <Col xs="8">
                                <RangeSlider
                                    value={housePercent}
                                    onChange={handleChangeHousePercent}
                                    size='sm'
                                />
                            </Col>
                        </InputGroup>
                        <Card.Text>
                            Housing per month at <b>{housePercent}%</b> (this includes utilities):<br />
                            <b>${((netSalary * (housePercent / 100)) / 12).toFixed(2)}</b>
                        </Card.Text>
                        <Row className="justify-content-around py-0">
                            <Button variant="primary" onClick={() => history.goBack()}>Back</Button>
                            <Link to='car'><Button variant="primary" type="submit">Next</Button></Link>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </Row >
    );
}

export default HousePercent;