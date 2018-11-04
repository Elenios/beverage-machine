import React from 'react';
import PropTypes from 'prop-types';
import selectBeverage from '../actions/index'
import store from '../store';

const Beverage = ( props, getBeverage ) => (
  <div className="container section">
      <img onClick={console.log(store.dispatch(selectBeverage))} alt={ props.name } src={ require(`../${props.img}`)} />
  </div>
);

Beverage.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
};

export default Beverage;