import React from "react";

const Item = () => {
  return (
    <div className="border shadow h-[300px] rounded flex flex-col items-center p-4 gap-2">
      <h1 className="text-2xl text-slate-700">ITM-001</h1>
      <h1 className="text-xl text-slate-700">Biscuit</h1>
      <button className="bg-slate-700 text-white px-4 py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
