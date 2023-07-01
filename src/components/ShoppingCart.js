import React from "react";
import { connect } from "react-redux";
import Item from "./Item";

const ShoppingCart = ({ items, addItem, removeItem }) => {
  const handleAddItem = () => {
    const item = {
      id: 1,
      name: `Item 1`,
    };
    addItem(item);
  };

  const handleRemoveItem = (id) => {
    removeItem(id);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <button onClick={handleAddItem}>Add Item</button>
      <Item id={1} name="Item 1" />
      <Item id={2} name="Item 2" />
      <Item id={3} name="Item 3" />
      <Item id={4} name="Item 4" />
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
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
