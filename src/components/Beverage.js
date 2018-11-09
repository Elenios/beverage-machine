import React from "react";
import PropTypes from "prop-types";

const Beverage = (props, { getBeverage }) => (
  <div className="container section" onClick={getBeverage}>
    <img alt={props.name} id={props.id} src={require(`../${props.img}`)} />
  </div>
);

Beverage.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string
};

export default Beverage;
