import React from 'react';
import Card from 'react-bootstrap/Card';
import { Form, InputGroup, FormControl } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import useSessionStorage from '../components/SessionHook';
import { Link } from 'react-router-dom';

const Salary = props => {
    const [salary, setSalary] = useSessionStorage('salary')
    const [netSalary] = React.useState(sessionStorage.getItem('netSalary') || '');
    const [status] = useSessionStorage('status')

    React.useEffect(() => {
        sessionStorage.setItem('netSalary', (salary * .69).toFixed(2))
    }, [salary])

    const handleChangeSalary = e => {
        setSalary(e.target.value)
    }

    const handleSubmit = event => {
        alert(salary)
        event.preventDefault()
    }

    let history = useHistory();
    let statusQuestion = "What is your salary?";
    let statusText = "Please add your yearly salary.";

    if (status == "Married") {
        statusQuestion = "What is your combined salary?"
        statusText = "Please add up your yearly salary between you and your spouse."
    }


    return (
        <Row className="justify-content-around py-0" style={{ marginTop: '20px' }} >
            <Card className="text-center">
                <Card.Header>Financials</Card.Header>
                <Card.Body>
                    <Card.Title>{statusQuestion}</Card.Title>
                    <Card.Text>{statusText}</Card.Text>
                    <Form onSubmit={handleSubmit}>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>$</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl value={salary} onChange={handleChangeSalary} pattern='\d*' aria-label="Amount (to the nearest dollar)" />
                            <InputGroup.Append>
                                <InputGroup.Text>.00</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                        <Row className="justify-content-around py-0">
                            <Button variant="primary" onClick={() => history.goBack()}>Back</Button>
                            <Link to='house'><Button variant="primary" type="submit">Next</Button></Link>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </Row >
    );
}

export default Salary;