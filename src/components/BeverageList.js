import React from 'react';
import Beverage from './Beverage';
import store from '../database';

const BeverageList = ({ beverages = store.database, getBeverageInfo }) => (
  beverages.map(beverage => <Beverage onClick={() => getBeverageInfo} key={beverage.id} name={beverage.name} img={beverage.smallimg} />));

export default BeverageList;
