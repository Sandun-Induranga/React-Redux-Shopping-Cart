import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-20 bg-pink-700">
      <NavLink to="/" className="text-white text-2xl font-bold">
        Home
      </NavLink>
    </div>
  );
};

export default Header;
