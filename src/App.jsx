import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResultsPage from './pages/ResultsPage';
import AssessmentPage from './pages/AssessmentPage';
import Salary from './FinancialQuestions/Salary';
import HousePercent from './FinancialQuestions/HousePercent';
import CarPercent from './FinancialQuestions/CarPercent';
import SpendingMoney from './FinancialQuestions/SpendingMoney';
import Name from './FinancialQuestions/Name';
import Profession from './FinancialQuestions/Profession';
import money from './assets/money.png';
import useSessionStorage from './components/SessionHook';

const App = () => {
  const [spendPercent] = useSessionStorage('spendPercent');
  const pageAssets = {
    title: 'Real Money',
    home: {
      title: 'Real Money',
      subTitle: 'Financial Planning for New Grads'
    },
    about: {
      title: 'About Real Money'
    }
  }

  const disableButton = spendPercent.length === 0;

  return (
    <Router>
      <Container className="container" style={{ maxWidth: "1320px" }} fluid={true}>
        <Navbar sticky="top" className="border-bottom" bg="white" expand="lg">
          <Navbar.Brand as={Link} to="/MoneyManager/" style={{ color: "#212529", textDecoration: 'none' }}>
            Real Money <img src={money} height="25" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav defaultActiveKey="/MoneyManager/" variant="pills" className='ml-auto'>
              <Nav.Item >
                <Nav.Link as={Link} id="homeNav" to="/MoneyManager/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} eventKey="about" to="/MoneyManager/about">About</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/MoneyManager/" exact render={() => <HomePage title={pageAssets.home.title} subTitle={pageAssets.home.subTitle} disableButton={disableButton} />} />
          <Route path="/MoneyManager/about" exact render={() => <AboutPage title={pageAssets.about.title} />} />
          <Route path="/MoneyManager/results" exact component={ResultsPage} />
          <Route path="/MoneyManager/assessment" exact component={AssessmentPage} />
          <Route path="/MoneyManager/salary" exact component={Salary} />
          <Route path="/MoneyManager/house" exact component={HousePercent} />
          <Route path="/MoneyManager/car" exact component={CarPercent} />
          <Route path="/MoneyManager/spend" exact component={SpendingMoney} />
          <Route path="/MoneyManager/name" exact component={Name} />
          <Route path="/MoneyManager/profession" exact component={Profession} />
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
