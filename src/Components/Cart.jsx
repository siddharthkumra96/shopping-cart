import React from "react";
import { connect } from "react-redux";
import CartProduct from "./CartProduct";
import "./Styles/Cart.css";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(state => ({
      open: !state.open
    }));
  }
  totalItemsInCart() {
    return Object.keys(this.props.cart).reduce(
      (acc, c) => acc + this.props.cart[c],
      0
    );
  }
  render() {
    const cartProducts = this.props.cart;
    return (
      <div className="cart">
        {this.state.open ? (
          <div className="displayCart">
            <button onClick={this.toggle}>Close</button>
            {Object.keys(cartProducts).length ? (
              Object.keys(cartProducts).map(productid => (
                <CartProduct key={productid} productid={productid} />
              ))
            ) : (
              <div>
                <p>Nothing added to cart yet!</p>
              </div>
            )}
          </div>
        ) : (
          <button onClick={this.toggle} class="cartButton">
            Cart ({this.totalItemsInCart()})
          </button>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps, null)(Cart);
