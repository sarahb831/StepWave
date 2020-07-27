import React from 'react';
import { Route, Switch } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import Intro from './components/Intro.js';
import SignIn from './components/SignIn.js';
import Products from  './components/products/Products.js';
import Customers from  './components/Customers.js';
import ContactInfo from  './components/manufacturers/ContactInfo.js';
import CompanyProfile from  './components/manufacturers/CompanyProfile.js';
import ComplianceCredentials from  './components/manufacturers/ComplianceCredentials.js';
import QualityGovernance from  './components/manufacturers/QualityGovernance.js';
import AvailableCapacity from  './components/manufacturers/AvailableCapacity.js';
import Resources from  './components/Resources.js';
import Events from  './components/Events.js';
import About from  './components/About.js';
import ContactUs from  './components/ContactUs.js';

function App() {
  return (
    <div className="App">
      <NavBar />
        <Switch>
          <Route exact path='/' component={Intro} />
          <Route exact path='/sign-in' component={SignIn} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/customers' component={Customers} />
          <Route exact path='/contact-info' component={ContactInfo} />
          <Route exact path='/company-profile' component={CompanyProfile} />
          <Route exact path='/compliance-credentials' component={ComplianceCredentials} />
          <Route exact path='/quality-governance' component={QualityGovernance} />
          <Route exact path='/available-capacity' component={AvailableCapacity} />
          <Route exact path='/resources' component={Resources} />
          <Route exact path='/events' component={Events} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact-us' component={ContactUs} />
          <Route component={Intro} />
        </Switch>
    </div>
  );
}

export default App;
