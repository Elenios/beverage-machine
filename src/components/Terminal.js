import React from 'react';

const Terminal = ( beverage ) => {
  if ( beverage.length === 0 ) {
    return ( "Quench your thirst with one of these refreshing beverages!" );
  } else {
    return beverage.map( element => (
      <p key={ element.name }>{ element.calories }</p>
    ) )
  }
};

export default Terminal;