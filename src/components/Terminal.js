import React from 'react';
import PropTypes from 'prop-types';

const Terminal = ({ beverageDetails }) => (
  <div>
    {beverageDetails ? { beverageDetails } : <p>Select a beverage!</p>}
  </div>
);

Terminal.propTypes = {
  beverageDetails: PropTypes.arrayOf(PropTypes.string),
};

export default Terminal;
