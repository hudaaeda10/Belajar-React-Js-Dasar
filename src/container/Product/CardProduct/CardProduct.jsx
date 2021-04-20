import React, { Component } from "react";

class CardProduct extends Component {
  state = {
    order: 4,
  };

  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue);
  };

  handlePlus = () => {
    this.setState(
      {
        order: this.state.order + 1,
      },
      () => {
        this.handleCounterChange(this.state.order);
      }
    );
  };

  handleMin = () => {
    if (this.state.order > 0) {
      this.setState(
        {
          order: this.state.order - 1,
        },
        () => {
          this.handleCounterChange(this.state.order);
        }
      );
    }
  };

  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img src="https://s2.bukalapak.com/img/21871399632/large/data.jpeg" alt="daging-ayam" />
        </div>
        <div className="product-title">Daging Ayam Murah</div>
        <div className="product-price">Rp 21.000,00</div>
        <div className="counter">
          <button className="minus" onClick={this.handleMin}>
            -
          </button>
          <input type="text" value={this.state.order} />
          <button className="plus" onClick={this.handlePlus}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default CardProduct;
