import React from 'react';
import PropTypes from 'prop-types';
import store from '../database';

const Fanta = ({ beverageDetails = store.database }) => beverageDetails.filter(beverage => beverage.name === 'Fanta').map(element => (
  <div>
    <img alt='Fanta' src={require( `../${element.largeimg}` )} />
    <h1>{element.name}</h1>
    <h2>{element.calories}</h2>
    <h3>{element.details}</h3>
  </div>
));

Fanta.propTypes = {
  beverageDetails: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Fanta;
