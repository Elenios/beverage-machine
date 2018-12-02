import React from "react";
import Beverage from "./Beverage";
import store from "../database";

const BeverageList = ({ beverages = store.database, getBeverage }) =>
  beverages.map(beverage => (
    <Beverage
      key={beverage.id}
      id={beverage.id}
      name={beverage.name}
      img={beverage.smallimg}
      onClick={() => getBeverage(beverage)}
    />
  ));

export default BeverageList;
