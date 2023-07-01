import React from "react";
import ShoppingCart from "../components/ShoppingCart";

const Home = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-10">
      <ShoppingCart />
    </div>
  );
};

export default Home;
