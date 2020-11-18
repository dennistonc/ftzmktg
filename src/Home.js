import React from 'react';
import HomeHero from './components/homeHero';
import HomeCard from './components/homeInfo';
import HomeVouchCard from './components/homeVouchInfo';
import FooterLink from './components/footer';

function Homepage() {
  return (
    <React.Fragment>
      <HomeHero />
      <HomeCard />
      <HomeVouchCard />
      <FooterLink />
    </React.Fragment>
  );
}

export default Homepage;