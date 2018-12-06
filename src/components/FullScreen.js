import React from "react";

const FullScreen = ({ info, clearInfo }) => {
  if (Object.keys(info).length > 0) {
    return(
  <div className="container section">
    <h3>{info.name}</h3>
    {/* <img alt={info.name} src={require(`../${info.largeimg}`)} /> */}
    <h4>{info.calories}</h4>
    <h5>{info.details}</h5>
    <h4 onClick={() => clearInfo()}>Back</h4>
  </div>
    )
  } else {
    return null
  }
};

export default FullScreen;