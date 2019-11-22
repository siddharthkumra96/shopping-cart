/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from "react";
import { connect } from "react-redux";
import {
  addProductToCart,
  removeProductFromCart,
} from "../store/actions/cartActions";
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
    switch (name) {
      case "add": this.props.addProductToCart(this.props.productId);
        break;
      case "remove": this.props.removeProductFromCart([this.props.productId]);
        break;
      case "removeAll": this.props.removeProductFromCart([this.props.productId, this.props.cartProduct.count]);
        break;
      default: break;
    }
  }

  render() {
    const { cartProduct, productId } = this.props;
    return (
      <div className="summary">
        <Product id={productId} type="summary" />
        <div className="quantity">
          <button name="remove" onClick={this.handleClick}>
            -
          </button>
          <ProductCounter id={productId} />
          <button name="add" onClick={this.handleClick}>
            +
          </button>
        </div>
        <button className="removeAllQuantities" name="removeAll" onClick={this.handleClick}> X </button>
        <div className="totalPerProduct">
          {` ₹ ${cartProduct.price} x ${cartProduct.count} = ₹ ${cartProduct.count * cartProduct.price}` }
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
});
export default connect(null, mapDispatchToProps)(CartProduct);
