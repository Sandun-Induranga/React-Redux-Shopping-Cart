import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-20 bg-pink-700 flex justify-between items-center px-10 fixed">
      <section>
        <h1 className="text-white text-xl">Shopping Cart</h1>
      </section>
      <section className="flex gap-4">
        <NavLink to="/" className="text-white">
          Items
        </NavLink>
        <NavLink to="/" className="text-white">
          Cart
        </NavLink>
      </section>
    </div>
  );
};

export default Header;
