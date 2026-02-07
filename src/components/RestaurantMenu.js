import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId} = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?complete-menu=true&lat=12.93&lng=77.62&restaurantId="+resId
    );
    // const data = await res.json();
    // setResInfo(data);
      console.log(res, "===========")
  };


  if (resInfo === null) return <Shimmer />;

  // Correct object destructuring
  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{costForTwoMessage}</h4>
      <li>itemCards[0].info.card.name</li>
    </div>
  );
};

export default RestaurantMenu;

