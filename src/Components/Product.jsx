import React from "react";
import { connect } from "react-redux";
import "./Styles/Product.css";

class Product extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { type, id, products } = this.props;
    let { data } = this.props;
    if (id) {
      data = products.find(product => product.id === id);
    }
    return (
      <div>
        {data ? (
          <div className={type === "summary" ? "productSummary" : ""}>
            <img src={data.img} alt="productImage" />
            <div className="titleBlock">
              <h3>{data.title}</h3>
              <span className="price">{data.price}</span>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.products
  };
};
export default connect(mapStateToProps, null)(Product);
