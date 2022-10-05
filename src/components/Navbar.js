import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Nav.css";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sideBar);
  
  return (
    <div>
      <div>
        <Link to="#" className="menu-bars">
          <FaBars onClick={showSideBar} />
        </Link>
      </div>
      <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiOutlineClose />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
