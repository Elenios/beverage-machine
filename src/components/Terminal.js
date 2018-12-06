import React from 'react';
import BeverageCard from './BeverageCard'

const Terminal = ({ beverage, moreInfo } ) => {
  return (
    beverage.name 
    ? 
    <div><BeverageCard selectedBeverage={beverage}/></div>
    : <h4>Please select a beverage!</h4>
    )
};

export default Terminal;