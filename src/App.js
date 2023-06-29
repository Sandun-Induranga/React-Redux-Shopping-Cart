import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Content from "./components/Content";

function App() {
  return (
    <Provider store={store}>
      <Content />
    </Provider>
  );
}

export default App;
