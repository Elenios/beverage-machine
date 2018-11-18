import React from 'react';
import Beverage from './Beverage';
import store from '../database';

const BeverageList = ({ beverages = store.database }) => beverages.map(beverage => <Beverage key={beverage.id} name={beverage.name} img={beverage.smallimg} />);

export default BeverageList;
