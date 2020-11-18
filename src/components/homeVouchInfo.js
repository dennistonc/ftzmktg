import React from 'react';
import workspace from '../images/workspace.jpg';
import bags from '../images/bags.jpg';
import toronto2 from '../images/toronto2.jpg';
import '../css/homeInfo.css';

 function HomeVouchCard() {
 return (
     <React.Fragment>
  <div className="container vouch-card">
    <div className="row">
        <div className="col s12 m12 l4">
        <div className="card">
            <div className="card-image">
            <img src={workspace}></img>
            </div>
            <div className="card-content">
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively. It would be a good idea to put additional information here, or maybe good customer reviews? :)</p>
            </div>
            <div className="card-action">
            <a href="#">This is a link for something potentially but feel free to remove me!</a>
            </div>
        </div>
        </div>

        <div className="col s12 m6 l4">
        <div className="card">
            <div className="card-image">
            <img src={bags}></img>
            </div>
            <div className="card-content">
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively. It would be a good idea to put additional information here, or maybe good customer reviews? :)</p>
            </div>
            <div className="card-action">
            <a href="#">i.e. view products here</a>
            </div>
        </div>
        </div>

        <div className="col s12 m6 l4">
        <div className="card">
            <div className="card-image">
            <img src={toronto2}></img>
            </div>
            <div className="card-content">
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively. It would be a good idea to put additional information here, or maybe good customer reviews? :)</p>
            </div>
            <div className="card-action">
            <a href="#">i.e. view hours and directions</a>
            </div>
        </div>
  </div>
  
    </div>
  </div>
  </React.Fragment>
 )};

 export default HomeVouchCard;