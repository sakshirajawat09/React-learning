import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?complete-menu=true&lat=12.93&lng=77.62&restaurantId=" +
        resId,
    );
    // const data = await res.json();
    setResInfo({
      id: 1,
      name: "Burger King",
      cuisines: ["Burger", "American"],
      rating: "2.3",
      deliveryTime: "30 mins",
      costForTwoMessage: "₹350 for two",
    });
  };

  return resInfo;
};
export default useRestaurantMenu;
