import React from 'react';
import HeaderLinkbar from './components/headerLinkbar';
import HeaderHero from './components/headerHero';
import FooterLink from './components/footer';
import Homepage from './Home';

const theme = {
      global: {
        font: {
          family: 'Roboto',
          size: '18px',
          height: '20px',
        },
      },
    };

function App() {
  return (
    <React.Fragment>
      <HeaderLinkbar />
    </React.Fragment>
  );
}

export default App;
