import React from 'react';
import PropTypes from 'prop-types';



const Beverage = (props, { getBeverageInfo }) => (
  <div className="container section">
    <img 
      onClick={() => console.log(getBeverageInfo)}
      alt={props.name}
      src={require( `../${props.img}` )}
      />
  </div>
);

Beverage.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Beverage;
