import React, { Component } from "react";
import PostItem from "./PostItem";

class Posts extends Component {
  state = {};
  render() {
    return this.props.posts.map(post => <PostItem key={post.id} post={post} />);
  }
}

export default Posts;
