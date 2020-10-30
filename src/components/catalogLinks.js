import React, { useState } from 'react';
// import '../assets/css/headerLinkbar.css';

 function CatalogLinks() {
 return (
    <div className="collection with-header">
        <h4 className="collection-header">First Names</h4>
        <a href="#!" className="collection-item">Alvin</a>
        <a href="#!" className="collection-item active">Alvin</a>
        {/* make active a state for when clicked on */}
        <a href="#!" className="collection-item">Alvin</a>
        <a href="#!" className="collection-item">Alvin</a>
    </div>
 )};

 export default CatalogLinks;