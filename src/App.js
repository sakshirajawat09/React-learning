import React from "react"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"))

// normal component
const Title = ()=> (
  <a href="/">
    <img
    alt="logo"
    className="logo"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRdTGO4h-NRfJTIutJ_6ACcdZNYegDfKqHvA&s"
    />
  </a>
)

const Header = () =>(
  <div className="header" >
    <Title/>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export const restaurantList = [
  {
    id: 1,
    name: "Burger King",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png",
    cuisine: ["Burger", "American"],
    rating: "4.3",
    deliveryTime: "30 mins",
    costForTwo: "₹350 for two"
  },
  {
    id: 2,
    name: "Domino’s Pizza",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png",
    cuisine: ["Pizza", "Italian"],
    rating: "4.5",
    deliveryTime: "25 mins",
    costForTwo: "₹400 for two"
  },
  {
    id: 3,
    name: "Subway",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Sandwich.png",
    cuisine: ["Healthy Food", "Sandwich"],
    rating: "4.2",
    deliveryTime: "20 mins",
    costForTwo: "₹300 for two"
  },
  {
    id: 5,
    name: "Biryani Blues",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Biryani.png",
    cuisine: ["Biryani", "Mughlai"],
    rating: "4.1",
    deliveryTime: "40 mins",
    costForTwo: "₹450 for two"
  },
  {
    id: 6,
    name: "Starbucks",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Coffee.png",
    cuisine: ["Beverages", "Cafe"],
    rating: "4.6",
    deliveryTime: "15 mins",
    costForTwo: "₹600 for two"
  }
];


const Restaurantcard = ( {image, name, cuisine, rating} ) => {
  return (
  <div className="card" style={{background:"grey"}}>
    <img src={image}/>
    <h2>{name}</h2>
    <h3>{cuisine.join(", ")}</h3>
    <h4>{rating} stars</h4>
  </div>
  )
}

const Body = () => {
  return(
    <div className="restaurant-list">
      {
        restaurantList.map((restaurant) =>{
          return <Restaurantcard {...restaurant} key={restaurant.id}/>
        })
      }
    {/* <Restaurantcard {...restaurantList[0]}/> */}
 
    </div>

  );
}

const Footer = () => {
  return(
    <>
    <h1>Footer</h1>
    </>
  )
}

const AppLayout = () => {
  return (
    <>
     <Header />
     <Body />
     <Footer />

    </>
  )

}

root.render(<AppLayout/>)
