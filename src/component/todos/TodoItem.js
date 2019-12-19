import React, { Component } from "react";

export class TodoItem extends Component {
  componentWillUnmount() {
    console.log("This component will unmount");
  }
  state = {
    isEditable: false
  };
  titleStyle = () => {
    return {
      textDecoration: this.props.todo.status ? "line-through" : "none"
    };
  };

  onChangeEdit = e => {
    this.props.editTodoItem(e.target.value, this.props.todo.id);
  };
  onkeyPressChange = e => {
    if (e.key === "Enter") {
      this.setState({
        isEditable: false
      });
    }
  };

  render() {
    const { title, id } = this.props.todo;
    const titleData = this.state.isEditable ? (
      <input
        type="text"
        placeholder="Enter your name..."
        value={title}
        className="input_edit"
        onChange={this.onChangeEdit}
        onKeyPress={this.onkeyPressChange}
      />
    ) : (
      <p style={this.titleStyle()}>{title}</p>
    );

    return (
      <div className="todo_list">
        <input
          type="checkbox"
          className="input_check"
          onChange={this.props.markStatus.bind(this, id)}
        />
        {titleData}
        <button
          onClick={() => this.setState({ isEditable: true })}
          className="edit_btn"
        >
          Edit
        </button>
        <button
          className="delete_btn"
          onClick={this.props.deleteTodo.bind(this, id)}
        >
          Delete{" "}
        </button>{" "}
      </div>
    );
  }
}

export default TodoItem;
