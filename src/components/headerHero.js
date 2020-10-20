import React, { useState, useEffect } from 'react';
// import { Link, Redirect } from 'react-router-dom';
import M from 'materialize-css';
import torontoEdits from '../images/torontoEdits.png';
// import '../assets/css/headerHero.css';

// Parallax Code
// Using react hooks for this component
// useEffect of "Component Did Mount" to use when the component mounts for the first time
// all the divs named .parallax will be initiated (using querySelector)
// then gets initiated
const HeaderHero = () => {
    useEffect(() => {
        let elements = document.querySelector(".parallax");
        M.Parallax.init(elements);
    }, []);

 return (
    <div className="parallax-container">
      <div className="parallax">
          <img src={torontoEdits}></img>
      </div>
      <div>
          <h1>Fritz Marketing Inc.</h1>
      </div>
    </div>
    )};

 export default HeaderHero;