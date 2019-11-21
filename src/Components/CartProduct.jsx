/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from "react";
import { connect } from "react-redux";
import {
  addProductToCart,
  removeProductFromCart,
} from "../store/actions/cartActions";
import {
  addProductQuantity,
  decreaseProductQuantity,
} from "../store/actions/productActions";
import Product from "./Product";
import ProductCounter from "./ProductCounter";
import "./Styles/CartProduct.css";

class CartProduct extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { name } = e.target;
    if (name === "add") {
      this.props.addProductToCart(this.props.productId);
      this.props.decreaseProductQuantity(this.props.productId);
    } else if (name === "remove") {
      this.props.removeProductFromCart(this.props.productId);
      this.props.addProductQuantity(this.props.productId);
    }
  }

  render() {
    const { productId } = this.props;
    return (
      <div className="summary">
        <Product id={productId} type="summary" />
        <div className="quantity">
          <button name="add" onClick={this.handleClick}>
            +
          </button>
          <ProductCounter id={productId} />
          <button name="remove" onClick={this.handleClick}>
            -
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addProductToCart(productId) {
    dispatch(addProductToCart(productId));
  },
  removeProductFromCart(productId) {
    dispatch(removeProductFromCart(productId));
  },
  addProductQuantity(productId) {
    dispatch(addProductQuantity(productId));
  },
  decreaseProductQuantity(productId) {
    dispatch(decreaseProductQuantity(productId));
  },
});
export default connect(null, mapDispatchToProps)(CartProduct);
