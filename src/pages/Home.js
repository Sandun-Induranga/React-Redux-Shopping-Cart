import React from "react";
import Item from "../components/Item";

const Home = () => {
  return (
    <div className="grid grid-cols-4 gap-10 p-10">
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default Home;
