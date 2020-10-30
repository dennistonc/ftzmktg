import React, { useState } from 'react';
// import { Link, Redirect } from 'react-router-dom';
import '../css/footer.css';

 function FooterLink() {
 return (
  <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col">
                <i className="material-icons">phone</i>
                <i className="material-icons">local_printshop</i>
                </div>
                <div className="col">
                <p>xxx-xxx-xxxx</p>
                <p>xxx-xxx-xxxx</p>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="container copyright-text">
            Copyright © 2020
            </div>
          </div>
        </footer>
 )};

 export default FooterLink;