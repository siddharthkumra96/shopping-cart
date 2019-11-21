/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import { connect } from "react-redux";
import Product from "./Product";
import {
  addProductToCart,
  removeProductFromCart,
} from "../store/actions/cartActions";
import {
  addProductQuantity,
  decreaseProductQuantity,
} from "../store/actions/productActions";
import Loader from "./Loader";
import "./Styles/Products.css";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(type, product) {
    if (type === "add") {
      this.props.addProductToCart(product);
      this.props.decreaseProductQuantity(product.id);
    } else if (type === "remove") {
      this.props.removeProductFromCart(product.id);
      this.props.addProductQuantity(product.id);
    }
  }

  render() {
    const sortFunction = (a, b) => {
      const x = a.title.toLowerCase();
      const y = b.title.toLowerCase();
      if (x < y) { return -1; }
      if (x > y) { return 1; }
      return 0;
    };
    if (this.props.loading) {
      return <Loader />;
    }
    return (
      <div>
        <h1>Products</h1>
        <div className="productsContainer">
          {this.props.products.sort(sortFunction).map((product) => (
            <div key={product.id}>
              <Product data={product} type="full" />
              {product.availableStock ? (
                <div>
                  <button
                    name="add"
                    onClick={() => {
                      this.handleClick("add", product);
                    }}
                  >
                Add
                  </button>
                  <button
                    name="add"
                    onClick={() => {
                      this.handleClick("remove", product);
                    }}
                  >
                Remove
                  </button>
                  <p>
                    Available Stock :
                    {product.availableStock}
                  </p>
                </div>
              ) : "Out of Stock!"}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products,
  loading: state.loading,
});
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
export default connect(mapStateToProps, mapDispatchToProps)(Products);
