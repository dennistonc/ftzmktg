import React from 'react';
import HeaderHero from './components/headerHero';
import HomeCard from './components/homeInfo';
import FooterLink from './components/footer';

function Homepage() {
  return (
    <React.Fragment>
      <HeaderHero />
      <HomeCard />
      <FooterLink />
    </React.Fragment>
  );
}

export default Homepage;