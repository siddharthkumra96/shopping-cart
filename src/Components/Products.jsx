/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import { connect } from "react-redux";
import Product from "./Product";
import Loader from "./Loader";
import "./Styles/Products.css";
import AddRemoveButtons from "./AddRemoveButtons";
import Filters from "./Filters";

class Products extends React.Component {
  constructor(props) {
    super(props);
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

  handleFilterFunction(filterValues, type) {
    let filterFunction = () => true;
    if (type !== "reset" && filterValues !== "none") {
      switch (type) {
        case "filterByPrice": {
          const filterRange = filterValues.split(",");
          filterFunction = (product) => product.price >= parseInt(filterRange[0], 10)
            && product.price <= parseInt(filterRange[1], 10);
        }
          break;
        case "filterBySize": filterFunction = (product) => product.size === filterValues;
          break;
        default: break;
      }
    }
    this.setState({
      filterFunction,
    });
  }

  render() {
    return (
      <div className="appContainer">
        <div className="sidebar">
          <Filters
            sortHandler={this.handleSortFunction}
            filterHandler={this.handleFilterFunction}
          />
        </div>
        {this.props.loading ? <div><Loader /></div> : (
          <div>
            <div className="productsHeading"><h1>Products</h1></div>
            <div className="productsContainer">
              {this.props.products.sort(this.state.sortFunction)
                .filter(this.state.filterFunction).map((product) => (
                  <div key={product.id}>
                    <Product data={product} type="full" />
                    {product.availableStock ? (
                      <AddRemoveButtons product={product} />
                    ) : (<div className="outOfStock">Out of Stock!</div>)}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products,
  loading: state.loading,
});
export default connect(mapStateToProps, null)(Products);
