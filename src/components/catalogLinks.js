import React from 'react';
import '../css/catalogInfo.css';

// make the href route to the diff products

 function CatalogLinks() {
 return (
     <React.Fragment>
    <div className="collection with-header for-bags">
        <h4 className="collection-header">Bags</h4>
        <a href="#!" className="collection-item">Woven Polypropylene Bags</a>
        <a href="#!" className="collection-item active">Laminated/Coated Woven Polypropylene Bags</a>
        {/* make active a state for when clicked on */}
        <a href="#!" className="collection-item">Bulk Bags</a>
        <a href="#!" className="collection-item">Jumbo Bags</a>
        <a href="#!" className="collection-item">Mattress Covers</a>
    </div>

    <div className="collection with-header for-fabrics">
        <h4 className="collection-header">Fabrics</h4>
        <a href="#!" className="collection-item">Woven Polypropylene Tubes</a>
        <a href="#!" className="collection-item">Lumber Cover Fabrics (Scrim - White/Black Coated)</a>
        <a href="#!" className="collection-item">Polypropylene Mesh Fabrics</a>
        <a href="#!" className="collection-item">Silt Fence/Ground Cover/Geo-Textile Fabrics</a>
        <a href="#!" className="collection-item">Construction Tarpaulins</a>
        <a href="#!" className="collection-item">Spiral Tubes</a>
        <a href="#!" className="collection-item">Safety Fence</a>
        <a href="#!" className="collection-item">Swimming Pool Covers</a>
    </div>
    </React.Fragment>
 )};

 export default CatalogLinks;