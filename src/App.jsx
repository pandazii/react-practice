import React, { useState } from 'react';

// Alles in de Router heeft de mogelijkheid om te routeren. 
// De Route geeft aan naar welk pad
// De Switch zorgt ervoor dat de routing stopt wanneer de eerste route klopt
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import ItemDetail from './components/ItemDetail'
import Login from './components/Login';

import './App.css';


function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/dashboard/:id" component={ItemDetail} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

const Home = () => (
  <h1>
    This is the home component
  </h1>
);

export default App;
