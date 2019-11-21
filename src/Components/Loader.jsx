/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import "./Styles/Loader.css";

class Loader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="loader" />
      </div>
    );
  }
}
export default Loader;
