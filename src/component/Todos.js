import React, { Component } from "react";
import TodoItem from "./TodoItem";

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markStatus={this.props.markStatus}
        deleteTodo={this.props.deleteTodo}
        editTodoItem={this.props.editTodoItem}
      />
    ));
  }
}

export default Todos;
