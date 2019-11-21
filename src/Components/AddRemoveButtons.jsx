/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from "react";

class AddRemoveButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onClick: handler, product } = this.props;
    return (
      <div>
        <button
          name="add"
          onClick={() => {
            handler("add", product);
          }}
        >
          Add
        </button>
        <button
          name="add"
          onClick={() => {
            handler("remove", product);
          }}
        >
          Remove
        </button>
        <p>
          Available Stock :
          {product.availableStock}
        </p>
      </div>
    );
  }
}
export default AddRemoveButtons;
