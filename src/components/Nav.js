import React from "react";
import { GrTechnology } from "react-icons/gr";
function Nav() {
  return (
    <div className="shadow-md w-full fixed top-0 left-o">
      <div className="md:flex bg-white py-4 md:px-10 px-7">
        <div className="flex flex-row font-bold text-2x1 cursor-pointer items-center">
          <span>
            <GrTechnology />
          </span>
          TechMeOut
        </div>
        <ul>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
