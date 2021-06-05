import React from 'react';
import Card from 'react-bootstrap/Card';
import { Form, InputGroup, FormControl } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import useSessionStorage from '../components/SessionHook';
import { Link } from 'react-router-dom';

const Name = props => {
    const [name, setName] = useSessionStorage('name')
    const [netSalary] = useSessionStorage('netSalary')
    const [housePercent] = useSessionStorage('housePercent')
    const [carPercent] = useSessionStorage('carPercent')
    const [spendPercent] = useSessionStorage('spendPercent')

    const [saving] = React.useState((netSalary * (1 - ((Number(housePercent) + Number(spendPercent) + Number(carPercent)) / 100))) / 12)

    React.useEffect(() => {
        sessionStorage.setItem('saving', saving.toFixed(2));
    })

    const handleChangeName = e => {
        setName(e.target.value)
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
                            <Link to='profession'><Button variant="primary" type="submit">Next</Button></Link>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </Row>
    );
}

export default Name;