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
    // setTimeout(() => {
    //   this.setState({
    //     count: 2,
    //   });
    // }, 3000);
  }

  //   kemudian jika terjadi update maka menjalankan step berikut
  shouldComponentUpdate(nextProps, nextState) {
    // untuk mengatur updatean pada component bisa atau tidak dilakukan dengan menggunakan parameter function ini
    console.group("shouldComponentUpdate");
    // console.log("nextProps", nextProps);
    console.log("nextState", nextState); // state count sesudah di update
    console.log("thisState", this.state); // state sebelum di ubah
    console.groupEnd();
    if (this.state.count >= 4) {
      return false;
    }
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

  // function yang merubah count
  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    console.log("render");
    return (
      <div>
        <button className="btn" onClick={this.changeCount}>
          Component Button {this.state.count}
        </button>
      </div>
    );
  }
}

export default LifeCycleComp;
