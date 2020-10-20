import React from 'react';
import HeaderHero from './components/headerHero';
import HomeCard from './components/homeInfo';

function Homepage() {
  return (
    <React.Fragment>
      <HeaderHero />
      <HomeCard />
    </React.Fragment>
  );
}

export default Homepage;