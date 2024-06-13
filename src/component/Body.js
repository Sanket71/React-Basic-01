import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import ReastaurantCard from "./RestaurantCard";
import Restaurants from "./../utils/mockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(Restaurants);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("hello");
            const filterRestaurants = listOfRestaurants.filter(
              (restaurant) => Number(restaurant.rating.rating_text) > 4
            );
            setListOfRestaurants(filterRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <ReastaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
