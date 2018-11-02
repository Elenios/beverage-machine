import React from 'react';
import PropTypes from 'prop-types';

const Beverage = ( props ) => (
  <div className="container section">
      <img onClick={() => console.log('hello')} alt={ props.name } src={ require(`../${props.img}`)} />
  </div>
);

Beverage.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
};

export default Beverage;