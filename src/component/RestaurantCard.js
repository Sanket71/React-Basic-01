import React from "react";
import ReactDOM from "react-dom/client";
import CDN_URL from "../utils/constant";

const ReastaurantCard = (props) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" src={CDN_URL} />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>4.4 Star</h4>
      <h4>38 Min</h4>
    </div>
  );
};

export default ReastaurantCard;
