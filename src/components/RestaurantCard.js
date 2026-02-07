import { LOGO_URL } from "../utils/constant"
const IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

const FALLBACK_IMG = "https://via.placeholder.com/508x320?text=No+Image";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="card" style={{ background: "grey" }}>
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        onError={(e) => {
          e.target.src = LOGO_URL;
        }}
      />
      <h2>{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
