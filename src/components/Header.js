import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOlineStatus from "../utils/useOlineStatus";

// normal component
const Title = () => (
  <a href="/">
    <img alt="logo" className="logo" src={LOGO_URL} />
  </a>
);

const Header = () => {
  const onlineStatus = useOlineStatus();
  const [loginButton, setLoginButton] = useState("Login");
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Network Status: {onlineStatus ? "Online 🟢" : "Offline 🔴"}</li>

          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            onClick={() => {
              loginButton == "Login"
                ? setLoginButton("Logout")
                : setLoginButton("Login");
            }}
          >
            {loginButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
