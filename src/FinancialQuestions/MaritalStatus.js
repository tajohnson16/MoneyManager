import React from 'react';
import Card from 'react-bootstrap/Card';
import { Form, InputGroup, FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import useSessionStorage from '../components/SessionHook';
import { Link } from 'react-router-dom';

const MaritalStatus = props => {
    const [status, setStatus] = useSessionStorage('status')

    const handleChangeStatus = e => {
        setStatus(e.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
    }

    return (
        <Row className="justify-content-around py-0" style={{ marginTop: '20px' }} >
            <Card className="text-center">
                <Card.Header>Financials</Card.Header>
                <Card.Body>
                    <Card.Title>What is your marital status?</Card.Title>
                    <Card.Text>
                        Are you married or single?
                    </Card.Text>
                    <Form onSubmit={handleSubmit}>
                        <InputGroup className="mb-3">
                            <FormControl as="select" value={status} onChange={handleChangeStatus} aria-label="Married or Single" >
                                <option value="" disabled selected>-- Select your option --</option>
                                <option>Single</option>
                                <option>Married</option>
                            </FormControl>
                        </InputGroup>
                        <Link to='salary'><Button variant="primary" type="submit">Next</Button></Link>
                    </Form>
                </Card.Body>
            </Card>
        </Row>
    );
}

export default MaritalStatus;