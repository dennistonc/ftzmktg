import React from 'react';
import OtherHero from './components/otherHero';
import CatalogCard from './components/catalogInfo';
import CatalogLinks from './components/catalogLinks';
import FooterLink from './components/footer';


function Catalogpage() {
  return (
    <React.Fragment>
      <OtherHero />
      <div className="row">
      <div className="col xl10 l12 m12 offset-l1 pull-l1"><CatalogCard /></div>
      <div className="col xl2 l3 m10 s10 push-s1 push-l8 pull-xl3"><CatalogLinks /></div>
      {/* fix the l attribute bc it's JANKY, make it align to top of catalog info card */}
      {/* add styling to second div to keep it displaying on the right even when responsively shrunk down, otherwise it stacks and the list appears under the card */}
      </div>
      {/* <CatalogCard /> */}
      {/* <CatalogLinks /> */}
      <FooterLink />
    </React.Fragment>
  );
}

export default Catalogpage;