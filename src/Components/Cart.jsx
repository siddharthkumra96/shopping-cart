/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { connect } from "react-redux";
import CartProduct from "./CartProduct";
import "./Styles/Cart.css";
import Loader from "./Loader";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.tax = 5;
    this.toggle = this.toggle.bind(this);
    this.handleTaxCheckbox = this.handleTaxCheckbox.bind(this);
  }

  getTotalCartValue() {
    return Object.keys(this.props.cart).reduce(
      (acc, c) => acc + (this.props.cart[c].count * this.props.cart[c].price),
      0,
    );
  }

  getGrossTotal() {
    const subtotal = this.getTotalCartValue();
    return this.state.taxCheckbox ? Math.round(subtotal + ((this.tax / 100) * subtotal)) : subtotal;
  }

  totalItemsInCart() {
    return Object.keys(this.props.cart).reduce(
      (acc, c) => acc + this.props.cart[c].count,
      0,
    );
  }

  toggle() {
    this.setState((state) => ({
      open: !state.open,
      taxCheckbox: false,
    }));
  }

  handleTaxCheckbox() {
    this.setState((state) => ({
      taxCheckbox: !state.taxCheckbox,
    }));
  }

  render() {
    const cartProducts = this.props.cart;
    return (
      <div className="cart">
        <div className={this.state.open ? "displayCart" : "hideCart"}>
          <button onClick={this.toggle} className="closeButton">Close</button>
          {this.props.loading
            ? (
              <div className="loaderContainer">
                <Loader type="small" />
              </div>
            ) : Object.keys(cartProducts).length ? (
              <div>
                {Object.keys(cartProducts).map((productId) => (
                  <CartProduct
                    key={productId}
                    cartProduct={cartProducts[productId]}
                    productId={productId}
                  />
                ))}
                <div className="netTotal">
                  <div className="totalItems">
                      Total Items in Cart :
                    {" "}
                    {this.totalItemsInCart()}
                  </div>
                  <div className="subtotal">
                      SUBTOTAL : ₹
                    {" "}
                    {this.getTotalCartValue()}
                  </div>
                </div>
                <div className="grossTotal">
                  <div className="taxContainer">
                    <div>
                      <label htmlFor="taxCheckbox"> Include Tax Amount ?</label>
                      <input type="checkbox" id="taxCheckbox" onChange={this.handleTaxCheckbox} />
                    </div>
                    <div>
                      Tax Rate
                      {" "}
                      {this.tax}
                      %
                    </div>
                  </div>
                  <div className="total">
                    TOTAL : ₹
                    {" "}
                    {this.getGrossTotal()}
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <p>Nothing added to cart yet!</p>
              </div>
            )}
        </div>
        <button onClick={this.toggle} className="cartButton">
            Cart (
          {this.totalItemsInCart()}
            )
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cart: state.cart,
  loading: state.loading,
});

export default connect(mapStateToProps, null)(Cart);
