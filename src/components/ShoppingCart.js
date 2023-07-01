import React from "react";
import { connect } from "react-redux";
import Item from "./Item";

const ShoppingCart = ({ items, addItem, removeItem }) => {
  // const handleAddItem = () => {
  //   const item = {
  //     id: 1,
  //     name: `Item 1`,
  //   };
  //   addItem(item);
  // };

  const handleRemoveItem = (id) => {
    removeItem(id);
  };

  return (
    <div className="flex w-full mt-20 gap-6">
      <section className="w-2/3">
        {/* <h1>Shopping Cart</h1>
        <button onClick={handleAddItem}>Add Item</button> */}
        <aside className="grid grid-cols-3 gap-4">
          <Item
            id={1}
            name="Item 1"
            addItem={addItem}
            removeItem={removeItem}
          />
          <Item
            id={2}
            name="Item 2"
            addItem={addItem}
            removeItem={removeItem}
          />
          <Item
            id={3}
            name="Item 3"
            addItem={addItem}
            removeItem={removeItem}
          />
        </aside>
      </section>
      <section className="border shadow w-1/3 h-full rounded p-4">
        <h1 className="text-2xl text-slate-700 text-center mb-10">Your Cart</h1>
        <ul className="text-lg text-slate-700">
          {items.map((item) => (
            <li
              className="py-2 px-4 flex justify-between mb-4 bg-slate-100 rounded"
              key={item.id}
            >
              {item.name}{" "}
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
