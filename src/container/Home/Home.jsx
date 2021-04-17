import React, { Component } from "react";
import YoutubeComp from "../../components/YoutubeComp/YoutubeComp";

class Home extends Component {
  render() {
    return (
      <div>
        <p>Youtube Components</p>
        <hr />
        <YoutubeComp time="07.12" title="Youtube Thumbnail - bagian 1" desc="2x ditontotn, 3 hari yang lalu" />
        <YoutubeComp time="05.12" title="Youtube Pemasaran - bagian 2" desc="4x ditontotn, 6 hari yang lalu" />
        <YoutubeComp time="03.04" title="Youtube Desain - bagian 3" desc="10x ditontotn, 12 hari yang lalu" />
        <YoutubeComp time="12.23" title="Youtube Upload - bagian 4" desc="5x ditontotn, 16 hari yang lalu" />
        <YoutubeComp />
      </div>
    );
  }
}

export default Home;
