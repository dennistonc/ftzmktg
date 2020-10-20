import React from 'react';
import CatalogCard from './components/catalogInfo';
import CatalogLinks from './components/catalogLinks';

function Catalogpage() {
  return (
    <React.Fragment>
      <CatalogCard />
      <CatalogLinks />
    </React.Fragment>
  );
}

export default Catalogpage;