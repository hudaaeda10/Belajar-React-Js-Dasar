import React, { Component, Fragment } from "react";
import Post from "../../components/Post/Post";
import "./BlogPost.css";
import axios from "axios";

export class BlogPost extends Component {
  state = {
    post: [],
  };
  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.setState({
    //       post: json,
    //     });
    //   });
    //  memanggil API dengan menggunakan axios
    axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
      this.setState({
        post: result.data,
      });
    });
  }

  render() {
    return (
      <Fragment>
        <p className="section-title">Blog Post</p>
        {/* melakukan pemanggilan post array yang sudah berisikkan hasil API */}
        {this.state.post.map((post) => {
          return <Post key={post.id} title={post.title} desc={post.body} />;
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
