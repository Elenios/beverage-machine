import React from 'react';
import Beverage from './Beverage'
import store from '../store';

const BeverageList = ( {beverages = store} ) => beverages.map( beverage => <Beverage name={beverage.name} img={beverage.smallimg}/>);

export default BeverageList;