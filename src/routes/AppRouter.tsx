import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Dashbaord from '../pages/dashboard/Dashboard';
import Contact from '../pages/contact/Contact';

const AppRouter = () => {
  return (
    <Router>
      <Link to="/">VIDEO GAMES</Link>
      <Link to="/contact">CONTACT</Link>
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