import React, { Component, Fragment } from "react";
import CardProduct from "./CardProduct/CardProduct";
import "./Product.css";

class Product extends Component {
  state = {
    order: 4,
  };

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="logo">
            <img src="https://i.pinimg.com/736x/5a/02/5e/5a025e222970a3dd2c3706bde935ae15.jpg" alt="logo" />
          </div>
          <div className="troley">
            <img
              src="data:image/png;base64,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"
              alt="keranjang"
            />
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
      </Fragment>
    );
  }
}

export default Product;
