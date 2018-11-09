import React from "react";
import BeverageContainer from "./BeverageContainer";
import store from "../database";

const BeverageList = ({ beverages = store.database }) =>
  beverages.map(beverage => (
    <BeverageContainer
      key={beverage.id}
      id={beverage.id}
      name={beverage.name}
      img={beverage.smallimg}
    />
  ));

export default BeverageList;
