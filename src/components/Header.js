import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

// normal component
const Title = ()=> (
  <a href="/">
    <img
    alt="logo"
    className="logo"
    src={LOGO_URL}
    />
  </a>
)

const Header = () =>{

  const [loginButton, setLoginButton] = useState("Login");
  return (
  <div className="header" >
    <Title/>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
        <button onClick={() =>
          {
            loginButton == "Login" ? setLoginButton("Logout") : setLoginButton("Login")
          }
        }>{loginButton}</button>
      </ul>
    </div>
  </div>
);
};

export default Header;