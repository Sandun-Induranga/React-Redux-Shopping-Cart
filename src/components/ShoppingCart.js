import React from "react";
import { connect } from "react-redux";

const ShoppingCart = ({ items, addItem, removeItem }) => {
  const handleAddItem = () => {
    const item = {
      id: Math.random(),
      name: `Item ${Math.floor(Math.random() * 100)}`,
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
