import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { mockData } from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://fakerestaurantapi.runasp.net/api/Restaurant",
    );
    const data = await res.json();
    setRestaurantList(data);
    setFilteredRestaurantList(data)
  };

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              console.log(searchText);
            }}
          />
          <button
            onClick={() => {
              const filterRest = restaurantList.filter( (restaurant) => {
                return restaurant.restaurantName.toLowerCase().includes(searchText.toLowerCase())
              })
              setFilteredRestaurantList(filterRest)

              console.log(restaurantList, "=======restaurantList");
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          // onClick={() => {
          //   setRestaurantList(restaurantList.filter((restaurant) => {
          //     return restaurant.rating > 4.0
          //   })
          // )
          //   }}
          onMouseOver={() => {
            console.log("dont over just clicked");
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurantList.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant} key={restaurant.restaurantID} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
