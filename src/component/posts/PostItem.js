import React, { Component, Fragment } from "react";

class PostItem extends Component {
  state = {};
  render() {
    const { title } = this.props.post;
    return (
      <Fragment>
        <div className="post_item">
          <h6 className="post_title">{title}</h6>
          <span className="delete_btn">
            <i class="material-icons">delete_forever</i>
          </span>
        </div>
      </Fragment>
    );
  }
}

export default PostItem;
