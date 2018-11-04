import React from 'react';
import store from '../database';
import PropTypes from 'prop-types';

const Coke = ( { beverageDetails = store.database } ) => {

  beverageDetails.forEach( element => {
    if ( element.name === 'Coca Cola' ) {
      return (
        <div>
          <img alt='Coke' src={ require( `../${element.largeimg}` ) } />
          <h1>element.name</h1>
          <h2>element.calories</h2>
          <h3>element.details</h3>
        </div>
      )
    }
  } );
}

Coke.propTypes = {
  beverageDetails: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Coke;