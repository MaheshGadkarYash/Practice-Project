import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import images from "../../constants/images";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
// import "./dropdown.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [toggleMenu, setToggleMenu] = React.useState(false);
  useEffect(() => {
    hydrateStateWithLocalStorage();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("login");
    navigate("/login");
  };

  const hydrateStateWithLocalStorage = () => {
    if (localStorage.hasOwnProperty("login")) {
      let token = localStorage.getItem("login");
      try {
        token = JSON.parse(token);
        setLogin(token);
      } catch (error) {
        setLogin("");
      }
      console.log("login", login);
    }
  };

  //Toggle function
  const menuToggle = () => {
    const toggleMenu = document.querySelector(".menu");
    toggleMenu.classList.toggle("active");
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <Link to="/">Home</Link>
        </li>
        <li className="p__opensans">
          <Link to="/about">About</Link>
        </li>
        <li className="p__opensans">
          <Link to="/menu">Menu</Link>
        </li>
        <li className="p__opensans">
          <Link to="/awards">Awards</Link>
        </li>
        <li className="p__opensans">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="app__navbar-login">
        {/* <Link to="/login" className="p__opensans">
          Log In / Registration
        </Link> */}
        <Link to="/" className="p__opensans">
          Book Table
        </Link>
        <div />
        <button className="custom__button" onClick={handleLogout}>
          Logout
        </button>
        {/* <div className="action">
          <Link to="#" className="profile">
            <FaUser color="whitesmoke" size={30} onClick={menuToggle}></FaUser>
          </Link>
          <div className="menu">
            <h3>{user && user.email}</h3>
            <ul>
              <li>
                <BiLogOut
                  color="black"
                  size={30}
                  onClick={handleLogout}
                ></BiLogOut>
                <Link to="#">
                  <span onClick={handleLogout}>Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="/fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <Link to="/home" onClick={() => setToggleMenu(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setToggleMenu(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/menu" onClick={() => setToggleMenu(false)}>
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/awards" onClick={() => setToggleMenu(false)}>
                  Awards
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
