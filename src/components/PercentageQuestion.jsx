import React from 'react';
import Card from 'react-bootstrap/Card';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import RangeSlider from 'react-bootstrap-range-slider';
import { useHistory } from 'react-router-dom';
import useSessionStorage from './SessionHook';
import { calculateMonthlyAmount } from '../utils/financials';

const PercentageQuestion = ({
  ariaLabel,
  defaultValue,
  description,
  monthlyAmountLabel,
  monthlyAmountSuffix = '',
  nextPath,
  storageKey,
  title,
}) => {
  const [netSalary] = useSessionStorage('netSalary');
  const [percentage, setPercentage] = React.useState(
    sessionStorage.getItem(storageKey) || defaultValue
  );
  const history = useHistory();

  React.useEffect(() => {
    sessionStorage.setItem(storageKey, percentage);
  }, [percentage, storageKey]);

  const handleSubmit = event => {
    event.preventDefault();
    history.push(nextPath);
  };

  return (
    <Row className="justify-content-around py-0" style={{ marginTop: '20px' }}>
      <Card className="text-center">
        <Card.Header>Financials</Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <Col xs="4">
                <FormControl
                  value={percentage}
                  size="sm"
                  onChange={event => setPercentage(event.target.value)}
                  aria-label={ariaLabel}
                />
              </Col>
              <Col xs="8">
                <RangeSlider
                  value={percentage}
                  onChange={event => setPercentage(event.target.value)}
                  size="sm"
                />
              </Col>
            </InputGroup>
            <Card.Text>
              {monthlyAmountLabel} at <b>{percentage}%</b>{monthlyAmountSuffix}:<br />
              <b>${calculateMonthlyAmount(netSalary, percentage).toFixed(2)}</b>
            </Card.Text>
            <Row className="justify-content-around py-0">
              <Button variant="primary" onClick={() => history.goBack()}>Back</Button>
              <Button variant="primary" type="submit">Next</Button>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default PercentageQuestion;
