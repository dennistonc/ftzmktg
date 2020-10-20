import React, { useState } from 'react';
// import { Link, Redirect } from 'react-router-dom';
import '../css/footer.css';

 function FooterLink() {
 return (
  <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h6 className="white-text">BUSINESS PHONE NO.</h6>
                <p className="grey-text text-lighten-4">xxx-xxx-xxxx</p>
                <h6 className="white-text">FAX NO.</h6>
                <p className="grey-text text-lighten-4">xxx-xxx-xxxx</p>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="container">
            © 2020 Copyright Text
            </div>
          </div>
        </footer>
 )};

 export default FooterLink;