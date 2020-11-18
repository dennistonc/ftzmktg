import React from 'react';
import HeaderLinkbar from './components/headerLinkbar';

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
