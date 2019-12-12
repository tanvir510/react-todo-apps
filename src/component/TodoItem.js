import React, { Component } from "react";

export class TodoItem extends Component {
  titleStyle = () => {
    return {
      textDecoration: this.props.todo.status ? "line-through" : "none"
    };
  };

  render() {
    const { title, id } = this.props.todo;
    return (
      <div className="todo_list">
        <input
          type="checkbox"
          className="input_check"
          onChange={this.props.markStatus.bind(this, id)}
        />
        <p style={this.titleStyle()}>{title}</p>
        <button
          className="delete_btn"
          onClick={this.props.deleteTodo.bind(this, id)}
        >
          X
        </button>
      </div>
    );
  }
}

export default TodoItem;
