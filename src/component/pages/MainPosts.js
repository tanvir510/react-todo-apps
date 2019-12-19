import React, { Component } from "react";
import Posts from "../posts/Posts";
class MainPosts extends Component {
  state = {};
  render() {
    return (
      <div className="main_posts">
        <div className="container">
          <Posts />
        </div>
      </div>
    );
  }
}

export default MainPosts;
