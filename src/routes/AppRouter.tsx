import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashbaord from '../pages/dashboard/Dashboard';
import Contact from '../pages/contact/Contact';
import Header from '../components/header/Header';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/">
        <Dashbaord />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </Router>
  )
}

export default AppRouter;