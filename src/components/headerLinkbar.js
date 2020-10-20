import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from '../Home';
import Catalogpage from '../Catalog';
import Contactpage from '../Contact';
// import '../assets/css/headerLinkbar.css';

 function HeaderLinkbar() {
 return (
   <Router>
    <nav>
      <div className="nav-wrapper">
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/catalog">Product Catalog</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>

      {/* insert the pages you create that you want to be rendered when each link is clicked, make them as a component/function and export them and then import them to here */}
      
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/catalog">
            <Catalogpage />
          </Route>
          <Route path="/contact">
            <Contactpage />
          </Route>
        </Switch>
    </nav>
  </Router>
 )};

 export default HeaderLinkbar;