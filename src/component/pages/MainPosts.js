import React, { Component } from "react";
import Posts from "../posts/Posts";
import axios from "axios";
class MainPosts extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      this.setState({
        posts: response.data
      });
    });
  }
  render() {
    return (
      <div className="main_posts">
        <div className="container">
          <h3 class="post_heading">Fake Post List Here</h3>
          <div className="post_element">
            <Posts posts={this.state.posts} />
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default MainPosts;
