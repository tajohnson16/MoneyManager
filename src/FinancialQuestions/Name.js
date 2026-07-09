import React from 'react';
import Card from 'react-bootstrap/Card';
import { Form, InputGroup, FormControl } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import useSessionStorage from '../components/SessionHook';

const Name = () => {
    const [name, setName] = useSessionStorage('name')
    const history = useHistory();

    const handleChangeName = e => {
        setName(e.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        history.push('/MoneyManager/profession')
    }

    return (
        <Row className="justify-content-around py-0" style={{ marginTop: '20px' }} >
            <Card className="text-center">
                <Card.Header>Financials</Card.Header>
                <Card.Body>
                    <Card.Title>Tell us your name.</Card.Title>
                    <Card.Text className="text-muted">
                        We'd like to use it to customize your results.
                    </Card.Text>
                    <Form onSubmit={handleSubmit}>
                        <InputGroup className="mb-3">
                            <FormControl value={name} size='sm' onChange={handleChangeName} aria-label="User's Name" >
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

export default Name;
