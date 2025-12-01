import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <p className="logo-title">HomeBrew</p>
      </Link>
      <ul className="navbarUl">
        <Link to="/">
          <li>Home </li>
        </Link>
        <Link to="/properties">
          <li className="dropdown">Properties</li>
        </Link>
        <Link to="/favorites">
          <li>Favorites</li>
        </Link>
        <Link to="add_apartment">
          <li>Add apartment</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
