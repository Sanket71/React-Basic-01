import React from "react";
import ReactDOM from "react-dom/client";
import CDN_URL from "../utils/constant";

const ReastaurantCard = (props) => {
  const { resData } = props;

  const cuisine = resData.subtitleData.cuisines;
  const cuisines = cuisine.map((cuisine) => cuisine.name);
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" src={resData.imageUrl} />
      <h3>{resData.name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{resData.rating.rating_text}</h4>
      <h4>{resData.subtitleData.locality.text}</h4>
    </div>
  );
};

export default ReastaurantCard;
