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
  // deletePost = id => {
  //   this.setState({
  //     posts: this.state.posts.filter(post => {
  //       return post.id !== id;
  //     })
  //   });
  // };

  deletePost = id => {
    const newPost = [];
    this.state.posts.map(post => {
      if (post.id !== id) {
        newPost.push(post);
      }
      return null;
    });
    this.setState({
      posts: newPost
    });
  };
  render() {
    return (
      <div className="main_posts">
        <div className="container">
          <h3 className="post_heading">Fake Post List Here</h3>
          <div className="post_element">
            <Posts posts={this.state.posts} deletePost={this.deletePost} />
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default MainPosts;
