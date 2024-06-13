import React from "react";
import ReactDOM from "react-dom/client";
import ReastaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <ReastaurantCard
          resName="Meghana Foods"
          cuisine="Biryani,North Indian,Asian"
        />
        <ReastaurantCard resName="KFC" cuisine="Burger,fast food" />
      </div>
    </div>
  );
};

export default Body;
