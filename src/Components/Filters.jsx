/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from "react";

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: "title",
      order: "asc",
      filterByPrice: "none",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSort() {
    const { sortBy, order } = this.state;
    const { sortHandler } = this.props;
    sortHandler(sortBy, order);
  }

  handleFilter() {
    const { filterByPrice } = this.state;
    const { filterHandler } = this.props;
    filterHandler(filterByPrice);
  }

  render() {
    const { sortBy, order, filterByPrice } = this.state;
    return (
      <div>
        <div>
          <select name="sortBy" value={sortBy} onChange={this.handleChange}>
            <option value="title">Name</option>
            <option value="price">Price</option>
          </select>
          <select name="order" value={order} onChange={this.handleChange}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
          <button onClick={this.handleSort}>Sort</button>
        </div>
        <div>
          <select name="filterByPrice" value={filterByPrice} onChange={this.handleChange}>
            <option value="none">All</option>
            <option value={[0, 100]}>0 to 100</option>
            <option value={[100, 400]}>100 to 400</option>
            <option value={[400, 100000]}>400+</option>
          </select>
          <button onClick={this.handleFilter}>Filter</button>
        </div>
      </div>
    );
  }
}
export default Filters;
