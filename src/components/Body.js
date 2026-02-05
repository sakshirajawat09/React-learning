import { useState } from "react";
import RestaurantCard from "./RestaurantCard"
import { mockData }from "../utils/mockData"
import "../../index.css";

const Body = () => {
  const [restaurantList, setRestrountList] = useState(mockData);
  return(
    <div className="body">
      <div className="filter">
        <button className="filter-btn" 
        onClick={() => {
          setRestrountList(restaurantList.filter((restaurant) => {
            return restaurant.rating > 4.0
          })
        )
          }}
        onMouseOver={() =>
        {
          console.log("dont over just clicked");
        }
        }
           >Top Rated Restaurant</button>
      </div>
      <div className="restaurant-list">
        {
          restaurantList.map((restaurant) =>{
            return <RestaurantCard {...restaurant} key={restaurant.id}/>
          })
        }
      {/* <RestaurantCard {...restaurantList[0]}/> */}
  
      </div>
    </div>

  );
}

export default Body;