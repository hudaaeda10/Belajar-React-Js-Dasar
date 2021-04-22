import React, { Component } from "react";
// import YoutubeComp from "../../components/YoutubeComp/YoutubeComp";
import LifeCycleComp from "../LifeCyleComp/LifeCycleComp";
// import Product from "../Product/Product";

class Home extends Component {
  state = {
    showComponents: true,
  };

  componentDidMount() {
    // console.log("componentDidMount");
    // setTimeout(() => {
    //   this.setState({
    //     showComponents: false,
    //   });
    // }, 15000);
  }

  render() {
    return (
      <div>
        {/* <p>Youtube Components</p>
        <hr />
        <YoutubeComp time="07.12" title="Youtube Thumbnail - bagian 1" desc="2x ditontotn, 3 hari yang lalu" />
        <YoutubeComp time="05.12" title="Youtube Pemasaran - bagian 2" desc="4x ditontotn, 6 hari yang lalu" />
        <YoutubeComp time="03.04" title="Youtube Desain - bagian 3" desc="10x ditontotn, 12 hari yang lalu" />
        <YoutubeComp time="12.23" title="Youtube Upload - bagian 4" desc="5x ditontotn, 16 hari yang lalu" />
        <YoutubeComp /> */}
        {/* <p>Product</p>
        <hr />
        <Product /> */}
        <p>Life Cycle</p>
        <hr />
        {this.state.showComponents ? <LifeCycleComp /> : null}
      </div>
    );
  }
}

export default Home;
