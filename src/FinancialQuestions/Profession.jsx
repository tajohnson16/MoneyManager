import React from 'react';
import Card from 'react-bootstrap/Card';
import { Form, InputGroup, FormControl } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import useSessionStorage from '../components/SessionHook';

const Profession = () => {
    const [profession, setProfession] = useSessionStorage('profession')
    const history = useHistory();

    const handleChangeProfession = e => {
        setProfession(e.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        history.push('/MoneyManager/results')
    }

    return (
        <Row className="justify-content-around py-0" style={{ marginTop: '20px' }} >
            <Card className="text-center">
                <Card.Header>Financials</Card.Header>
                <Card.Body>
                    <Card.Title>Tell us your profession.</Card.Title>
                    <Card.Text className="text-muted">
                        We'd like to use it to customize your results.
                    </Card.Text>
                    <Form onSubmit={handleSubmit}>
                        <InputGroup className="mb-3">
                            <FormControl value={profession} size='sm' onChange={handleChangeProfession} aria-label="User's Profession" >
                            </FormControl>
                        </InputGroup>
                        <Row className="justify-content-around py-0">
                            <Button variant="primary" onClick={() => history.goBack()}>Back</Button>
                            <Button variant="primary" type="submit">Next</Button>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </Row>
    );
}

export default Profession;
