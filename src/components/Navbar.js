import React from "react";
import { Link } from "react-router-dom";

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
