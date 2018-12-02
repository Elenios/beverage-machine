import React from 'react';

const Terminal = ({ beverage, moreInfo } ) => {
    return (
      beverage.name 
    ? <div><h4>{beverage.name}</h4>
    <h5>{beverage.calories}</h5>
    <h6 onClick={() => moreInfo(beverage)}>Click for more info</h6>
    </div> 
    : <h4>Please select a beverage!</h4>
    )
};

export default Terminal;