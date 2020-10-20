import React, { useState } from 'react';
// import { Link, Redirect } from 'react-router-dom';
// import '../assets/css/headerLinkbar.css';

 function ContactCard() {
 return (
  <div className="col s12 m7">
    <h4 className="header">Contact Information</h4>
    <div className="card horizontal">
      <div className="card-stacked">
        <div className="card-content">
          <h5>Vice President</h5>
          <p>John Doe</p>
          <h5>Business Phone No.</h5>
          <p>999-999-9999</p>
          <h5>Fax No.</h5>
          <p>999-999-9999</p>
          <h5>Email</h5>
          <p>JohnDoe@sample.com</p>
          <h5>Address</h5>
          <p>123 Sample St.</p>
        </div>
        </div>
      </div>
    </div>
 )};

 export default ContactCard;