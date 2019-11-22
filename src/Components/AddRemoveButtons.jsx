/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from "react";
import { connect } from "react-redux";
import { addProductToCart, removeProductFromCart } from "../store/actions/cartActions";
import "./Styles/AddRemoveButtons.css";

class AddRemoveButtons extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(type, product) {
    if (type === "add") {
      this.props.addProductToCart(product);
    } else if (type === "remove") {
      this.props.removeProductFromCart(product.id);
    }
  }

  render() {
    const { product } = this.props;
    const isProductInCart = Object.keys(this.props.cart).includes(product.id);
    return (
      <div>
        <div className="addRemoveButtons">
          <button
            name="add"
            onClick={() => {
              this.handleClick("add", product);
            }}
          >
          Add
          </button>
          {isProductInCart ? (
            <button
              name="add"
              onClick={() => {
                this.handleClick("remove", product);
              }}
            >
          Remove
            </button>
          ) : ""}
        </div>
        <div className="availableStock">
          Available Stock :
          {product.availableStock}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products,
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  addProductToCart(product) {
    dispatch(addProductToCart(product));
  },
  removeProductFromCart(productId) {
    dispatch(removeProductFromCart(productId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddRemoveButtons);
