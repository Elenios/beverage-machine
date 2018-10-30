import React from 'react';
import PropTypes from 'prop-types';

const Beverage = (name, img) => (
  <div className="container section beverage">
    <div className="card z-depth-0">
    <p>{name}</p>
<img alt={name} src={`../${img}`} />
    </div>
  </div>
);

Beverage.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
};

export default Beverage;