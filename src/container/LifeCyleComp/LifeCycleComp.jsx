import React, { Component } from "react";
import "./LifeCyleComp.css";

class LifeCycleComp extends Component {
  // berawal dari constructor
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    console.log("constructor");
  }

  //   kemudian menjalankan langkha ini
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  //   menjalanakan didmount setelah menjalankan render dan step terakhir ketiak mounting
  componentDidMount() {
    console.log("componentDidMount");
    setTimeout(() => {
      this.setState({
        count: 2,
      });
    }, 3000);
  }

  //   kemudian jika terjadi update maka menjalankan step berikut
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  //   menangkap hal2 yang component sebelum di update
  getSnapshotBeforeUpdate(prevProps, prevState, snapshot) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  //   memasang component yang diupdate
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }

  //   melepaskan component yang lama
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <div>
        <button className="btn">Component Button {this.state.count}</button>
      </div>
    );
  }
}

export default LifeCycleComp;
