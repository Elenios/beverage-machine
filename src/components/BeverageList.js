import React from 'react';
import Beverage from './Beverage'
import store from '../store';

const BeverageList = ( {beverages = store} ) => beverages.map( beverage => <Beverage key={beverage.id} name={beverage.name} img={beverage.smallimg}/>);

export default BeverageList;