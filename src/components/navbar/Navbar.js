import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
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
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            CESH <i className="fas fa-rocket"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          {/* moved class to div, added class to ul to fix weird buggy thing */}
          <div className={click ? "nav-menu active" : "nav-menu"}>
            <ul className="list-holder">
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/webdev"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Web Dev
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/programming"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Programming
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/sign-up"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
