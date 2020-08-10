import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Forside from '../pages/forside';
import Hoteller from '../pages/hoteller';
import Login from '../pages/login';
import Reservation from '../pages/reservation';
import Værelser from '../pages/værelser';




function Routertest() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li className="list-inline-item">
              <Link to="/">Forside</Link>
            </li>
  
            <li className="list-inline-item">
              <Link to='/hoteller'>Hoteller og Destionationer</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/værelser">Værelser</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/reservation">Reservation</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Route path="/" exact component={Forside} />
      <Route path="/hoteller" exact component={Hoteller} />
      <Route path="/login" exact component={Login} />
      <Route path="/reservation" exact component={Reservation} />
      <Route path="/værelser" exact component={Værelser} />
    </Router>
  );
}
export default Routertest;