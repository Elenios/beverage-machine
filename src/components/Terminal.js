import React from 'react';

const Terminal = ( beverage ) => {
  console.log(beverage);
  
  if ( beverage.length === 0 ) {
    return <p>Quench your thirst with one of these refreshing beverages!</p>
  } else {
    return <p key={ beverage.name }>{ beverage.calories }</p>
  }
};

export default Terminal;