import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../pages/forside';
import Hoteller from '../pages/Hoteller';
import Login from '../pages/login';
import Reservation from '../pages/reservation';
import Værelser from '../pages/værelser'


function Routertest() {
  return (
    <Router>
      <header>
        <nav>

          <ul>
            <li className="list-inline-item">
              <Link to="/">FORSIDE</Link>
            </li>
  
          </ul>
        </nav>
      </header>
      <Route path="/" exact component={Home} />
     
    </Router>
  );
}
export default Routertest;