import { createStore } from "redux";

// Define your initial state
const initialState = {
  items: [],
};

// Define your reducer function
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(cartReducer);

export default store;
