import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../button/Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/~camilo3/"
            className="navbar-logo"
            onClick={closeMobileMenu}
          >
            <i class="fas fa-user-astronaut"></i>CESH{" "}
            <i className="fas fa-rocket"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          {/* moved class to div, added class to ul to fix weird buggy thing */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* <ul className="list-holder"> */}
            <li className="nav-item">
              <Link
                to="/~camilo3/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/~camilo3/webdev"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Web Dev
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/~camilo3/programming"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Programming
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/~camilo/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {/* </div> */}
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
