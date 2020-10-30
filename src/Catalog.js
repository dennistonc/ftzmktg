import React from 'react';
import CatalogCard from './components/catalogInfo';
import CatalogLinks from './components/catalogLinks';
import FooterLink from './components/footer';

function Catalogpage() {
  return (
    <React.Fragment>
      <div className="row">
      <div className="col l9 offset-l1 pull-8"><CatalogCard /></div>
      <div className="col l2 pull-l3"><CatalogLinks /></div>
      {/* add styling to second div to keep it displaying on the right even when responsively shrunk down, otherwise it stacks and the list appears under the card */}
      </div>
      {/* <CatalogCard /> */}
      {/* <CatalogLinks /> */}
      <FooterLink />
    </React.Fragment>
  );
}

export default Catalogpage;