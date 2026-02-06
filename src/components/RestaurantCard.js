// const RestaurantCard = ( {image, name, cuisine, rating} ) => {
//   return (
//   <div className="card" style={{background:"grey"}}>
//     <img src={image}/>
//     <h2>{name}</h2>
//     <h3>{cuisine.join(", ")}</h3>
//     <h4>{rating} stars</h4>
//   </div>
//   )
// }

const RestaurantCard = ( {restaurantName, address, type} ) => {
  return (
  <div className="card" style={{background:"grey"}}>
    {/* <img src={image}/> */}
    <h2>{restaurantName}</h2>
    <h3>{address}</h3>
    <h4>{type}</h4>
  </div>
  )
}

export default RestaurantCard;