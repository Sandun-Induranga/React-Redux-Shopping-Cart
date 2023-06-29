import React from "react";

const Item = (props) => {
  return (
    <div className="border shadow h-[300px] rounded flex flex-col items-center p-4 gap-2">
      <h1 className="text-2xl text-slate-700">{props.id}</h1>
      <h1 className="text-xl text-slate-700">{props.name}</h1>
      <button className="bg-slate-700 text-white px-4 py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
