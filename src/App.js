import React from "react";
import "./App.css";
import Products from "./Components/Products";
import Cart from "./Components/Cart";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <Cart />
        </div>
        <Products />
      </div>
    );
  }
}
export default App;
