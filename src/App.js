import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <Provider store={store}>
      <ShoppingCart />
    </Provider>
  );
}

export default App;
