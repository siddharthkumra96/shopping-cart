import React from "react";
import { connect } from "react-redux";

class ProductCounter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { products, id } = this.props;
    const count = products[id];
    return <div className="counter">{count}</div>;
  }
}

const mapStateToProps = state => {
  return {
    products: state.cart
  };
};

export default connect(mapStateToProps, null)(ProductCounter);
