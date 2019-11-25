/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from "react";

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: "title asc",
      filterByPrice: "none",
      filterBySize: "none",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleChange(e) {
    let state;
    switch (e.target.name) {
      case "sortBy": this.handleSort(e.target.value);
        state = {
          [e.target.name]: e.target.value,
        };
        break;
      case "filterByPrice": this.handleFilter(e.target.name, e.target.value);
        state = {
          [e.target.name]: e.target.value,
        };
        break;
      case "filterBySize": this.handleFilter(e.target.name, e.target.value);
        state = {
          [e.target.name]: e.target.value,
        };
        break;
      case "reset": this.handleFilter(e.target.name);
        state = {
          filterByPrice: "none",
          filterBySize: "none",
        };
        break;
      default: break;
    }
    this.setState(state);
  }

  handleSort(originalSortBy) {
    const { sortHandler } = this.props;
    const [sortBy, order] = originalSortBy.split(" ");
    sortHandler(sortBy, order);
  }

  handleFilter(type, filterValues) {
    const { filterHandler } = this.props;
    filterHandler(filterValues, type);
  }

  render() {
    const { sortBy, filterByPrice, filterBySize } = this.state;
    return (
      <div className="filterContainer">
        <div className="filterLabel">
          <label htmlFor="sortBy"> Sort By : </label>
        </div>
        <select name="sortBy" id="sortBy" value={sortBy} onChange={this.handleChange}>
          <option value="title asc">Name (A to Z)</option>
          <option value="title desc">Name (Z to A)</option>
          <option value="price asc">Price (Lowest First)</option>
          <option value="price desc">Price (Highest First)</option>
        </select>
        <div className="filterLabel">
          <label htmlFor="filterByPrice">Filter By Price : </label>
        </div>
        <select name="filterByPrice" id="filterByPrice" value={filterByPrice} onChange={this.handleChange}>
          <option value="none">All</option>
          <option value={[0, 100]}>0 to 100</option>
          <option value={[100, 400]}>100 to 400</option>
          <option value={[400, Infinity]}>400+</option>
        </select>
        <div className="filterLabel">
          <label htmlFor="filterBySize">Filter By Size : </label>
        </div>
        <select name="filterBySize" id="filterBySize" value={filterBySize} onChange={this.handleChange}>
          <option value="none">All</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
        <div className="filterLabel">
          <button onClick={this.handleChange} name="reset">Reset Filters</button>
        </div>
      </div>
    );
  }
}
export default Filters;
