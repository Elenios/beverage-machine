import React from "react";
import PropTypes from "prop-types";

const Beverage = (props) => (
  <div className="container section">
    <img onClick={props.onClick} alt={props.name} id={props.id} src={require(`../${props.img}`)} />
  </div>
);

Beverage.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string
};

export default Beverage;
