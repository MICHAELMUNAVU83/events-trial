import React from "react";
import { Link } from "react-router-dom";
import "../Nav.css";

function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/form">Add an Event</Link>
      </nav>
    </div>
  );
}

export default Navbar;
