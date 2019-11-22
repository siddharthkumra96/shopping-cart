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
import Loader from "./Loader";
import "./Styles/Products.css";
import AddRemoveButtons from "./AddRemoveButtons";
import Filters from "./Filters";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleSortFunction = this.handleSortFunction.bind(this);
    this.handleFilterFunction = this.handleFilterFunction.bind(this);
    this.state = {
      sortFunction(a, b) {
        const x = a.title.toLowerCase();
        const y = b.title.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
      },
      filterFunction() {
        return true;
      },
    };
  }

  handleClick(type, product) {
    if (type === "add") {
      this.props.addProductToCart(product);
    } else if (type === "remove") {
      this.props.removeProductFromCart(product.id);
    }
  }

  handleSortFunction(sortBy, order) {
    this.setState({
      sortFunction: (a, b) => {
        const x = a[sortBy];
        const y = b[sortBy];
        if (x < y) { return order === "asc" ? -1 : 1; }
        if (x > y) { return order === "asc" ? 1 : -1; }
        return 0;
      },
    });
  }

  handleFilterFunction(filterByPrice) {
    let filterFunction = () => true;
    const filterRange = filterByPrice.split(",");
    if (filterByPrice !== "none") {
      filterFunction = (product) => product.price >= parseInt(filterRange[0], 10)
      && product.price <= parseInt(filterRange[1], 10);
    }
    this.setState({
      filterFunction,
    });
  }


  render() {
    if (this.props.loading) {
      return <Loader />;
    }
    return (
      <div>
        <h1>Products</h1>
        <Filters sortHandler={this.handleSortFunction} filterHandler={this.handleFilterFunction} />
        <div className="productsContainer">
          {this.props.products.sort(this.state.sortFunction)
            .filter(this.state.filterFunction).map((product) => (
              <div key={product.id}>
                <Product data={product} type="full" />
                {product.availableStock ? (
                  <AddRemoveButtons product={product} onClick={this.handleClick} />
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
});
export default connect(mapStateToProps, mapDispatchToProps)(Products);
