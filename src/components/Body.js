import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { mockData } from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOlineStatus from "../utils/useOlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOlineStatus();

  useEffect(() => {
    const timmer = setInterval(() => {
      console.log("Mounting by useeffect");
    }, 1000);

    fetchData();
    return () => {
      clearInterval(timmer);

      console.log("unMounting by useeffect return");
    };
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.93&lng=77.62&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await res.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setRestaurantList(restaurants);
    setFilteredRestaurantList(restaurants);
  };

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }
  if (!onlineStatus) {
    return <h1> You are offline, please check the internet</h1>;
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
              const filterRest = restaurantList.filter((restaurant) => {
                return restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurantList(filterRest);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setRestaurantList(
              restaurantList.filter((restaurant) => {
                return restaurant.info.avgRating > 5;
              }),
            );
          }}
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
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
