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

export default Header;