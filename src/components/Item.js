import React from "react";

const Item = (props) => {
  const handleAddItem = () => {
    const item = {
      id: props.id,
      name: props.name,
    };
    props.addItem(item);
  };
  return (
    <div className="border shadow h-[300px] rounded flex flex-col items-center p-4 gap-2">
      <h1 className="text-2xl text-slate-700">{props.id}</h1>
      <h1 className="text-xl text-slate-700">{props.name}</h1>
      <button
        className="bg-slate-700 text-white px-4 py-2 rounded"
        onClick={handleAddItem}
      >
        Add to Cart
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch({ type: "ADD_ITEM", payload: item }),
    removeItem: (id) => dispatch({ type: "REMOVE_ITEM", payload: id }),
  };
};

export default Item;
