import React from 'react';
import PropTypes from 'prop-types';

const Beverage = ( props ) => (
  <div className="container section beverage">
    <div className="card z-depth-0">
      <img alt={ props.name } src={ require(`../${props.img}`)} />
    </div>
  </div>
);

Beverage.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
};

export default Beverage;