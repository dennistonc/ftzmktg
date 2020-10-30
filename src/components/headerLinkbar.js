import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from '../Home';
import Catalogpage from '../Catalog';
import Contactpage from '../Contact';
import '../css/headerLinkbar.css';

// get the sidenav code to work, may have to install materializeUI :( sadge

 function HeaderLinkbar() {
 return (
   <Router>
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">Fritz Marketing Inc.</a>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/catalog">Product Catalog</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>

      <ul className="sidenav" id="mobile-demo">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/catalog">Product Catalog</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

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