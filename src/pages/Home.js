import React from "react";
import Item from "../components/Item";

const Home = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-10">
      <Item id="ITM-001" name="Biscuit" />
      <Item id="ITM-002" name="Biscuit" />
      <Item id="ITM-003" name="Biscuit" />
      <Item id="ITM-004" name="Biscuit" />
    </div>
  );
};

export default Home;
