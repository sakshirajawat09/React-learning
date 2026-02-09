import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOlineStatus from "../utils/useOlineStatus";

// normal component
const Title = () => (
  <a href="/">
    <img alt="logo" className="w-30" src={LOGO_URL} />
  </a>
);

const Header = () => {
  const onlineStatus = useOlineStatus();
  const [loginButton, setLoginButton] = useState("Login");
  return (
    <div className="flex justify-between m-2 shadow-2xl items-center bg-pink-50 sm:bg-yellow-50 lg:bg-green-50">
      <Title />
      <div className="nav-items">
        <ul className="flex p-4 m-6 gap-2">
          <li className="px-4">
            Network Status: {onlineStatus ? "Online 🟢" : "Offline 🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            Cart</li>
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
