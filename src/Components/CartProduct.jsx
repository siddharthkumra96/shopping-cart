import React from "react";
import {
  addProductToCart,
  removeProductFromCart
} from "../store/actions/cartActions";
import Product from "./Product";
import { connect } from "react-redux";
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
      this.props.addProductToCart(this.props.productid);
    } else if (name === "remove") {
      this.props.removeProductFromCart(this.props.productid);
    }
  }
  render() {
    const { productid } = this.props;
    return (
      <div className="summary">
        <Product id={productid} type="summary" />
        <div className="quantity">
          <button name="add" onClick={this.handleClick}>
            +
          </button>
          <ProductCounter id={productid} />
          <button name="remove" onClick={this.handleClick}>
            -
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addProductToCart(product) {
      dispatch(addProductToCart(product));
    },
    removeProductFromCart(product) {
      dispatch(removeProductFromCart(product));
    }
  };
};
export default connect(null, mapDispatchToProps)(CartProduct);
