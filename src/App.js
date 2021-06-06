import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Real Money',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' }
      ],
      home: {
        title: 'Real Money',
        subTitle: 'Financial Planning for New Grads'
      },
      about: {
        title: 'About Real Money'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="container" style={{ maxWidth: "1320px" }} fluid={true}>
          <Navbar sticky="top" className="border-bottom" bg="white" expand="lg">
            <Navbar.Brand><Nav.Link style={{ color: "#212529", textDecoration: 'none' }} href="/MoneyManager/">Real Money <img src={money} height="25px"></img></Nav.Link></Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav defaultActiveKey="/MoneyManager/" variant="pills" className='ml-auto'>
                <Nav.Item >
                  <Nav.Link id="homeNav" href="/MoneyManager/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} eventKey="about" to="/MoneyManager/about">About</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/MoneyManager/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} />} />
          <Route path="/MoneyManager/about" exact render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/MoneyManager/results" exact render={() => <ResultsPage />} />
          <Route path="/MoneyManager/assessment" exact render={() => <AssessmentPage />} />
          <Route path="/MoneyManager/salary" exact render={() => <Salary />} />
          <Route path="/MoneyManager/house" exact render={() => <HousePercent />} />
          <Route path="/MoneyManager/car" exact render={() => <CarPercent />} />
          <Route path="/MoneyManager/spend" exact render={() => <SpendingMoney />} />
          <Route path="/MoneyManager/name" exact render={() => <Name />} />
          <Route path="/MoneyManager/profession" exact render={() => <Profession />} />





          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
