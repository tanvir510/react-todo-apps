import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: ""
  };
  onChange = e => {
    this.setState({
      title: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addNewItem(this.state.title);
    this.setState({ title: "" });
  };
  render() {
    return (
      <form className="additem_area" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Add your new item..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input type="submit" className="submit_btn" value="Submit" />
      </form>
    );
  }
}

export default AddTodo;
