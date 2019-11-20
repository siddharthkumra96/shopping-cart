import React from "react";
import { connect } from "react-redux";
import Product from "./Product";
import {
  addProductToCart,
  removeProductFromCart
} from "../store/actions/cartActions";
import "./Styles/Products.css";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(type, prodid) {
    if (type === "add") {
      this.props.addProductToCart(prodid);
    } else if (type === "remove") {
      this.props.removeProductFromCart(prodid);
    }
  }
  render() {
    return (
      <div>
        <h1>Products</h1>
        <div className="productsContainer">
          {this.props.products.map(product => (
            <div key={product.id}>
              <Product data={product} type="full" />
              <button
                name="add"
                onClick={() => {
                  this.handleClick("add", product.id);
                }}
              >
                Add
              </button>
              <button
                name="add"
                onClick={() => {
                  this.handleClick("remove", product.id);
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.products
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addProductToCart(productid) {
      dispatch(addProductToCart(productid));
    },
    removeProductFromCart(productid) {
      dispatch(removeProductFromCart(productid));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
