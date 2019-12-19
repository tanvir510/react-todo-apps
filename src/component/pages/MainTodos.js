import React, { Component } from "react";
import uuid from "react-uuid";
import Todos from "../todos/Todos";
import AddTodo from "../todos/AddTodo";

export class MainContent extends Component {
  state = {
    test: "Tanvir",
    todos: [
      {
        id: 1,
        title: "Front End Developer",
        status: true
      },
      {
        id: 2,
        title: "Back End Developer",
        status: false
      },
      {
        id: 3,
        title: "Apps Developer",
        status: true
      },
      {
        id: 4,
        title: "UX/UI Designer",
        status: false
      },
      {
        id: 5,
        title: "QA Engineer",
        status: true
      }
    ]
  };

  // Mark Status
  markStatus = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.status = !todo.status;
        }
        return todo;
      })
    });
  };

  // Delete Todo
  deleteTodo = id => {
    // Using push method
    var arr = [];
    this.state.todos.map(todo => {
      if (todo.id !== id) {
        return arr.push(todo);
      }
      return null;
    });
    this.setState({
      todos: arr
    });
  };

  // Using filter method
  // this.setState({
  //   todos: [
  //     ...this.state.todos.filter(todo => {
  //       return todo.id !== id;
  //     })
  //   ]
  // });

  addNewItem = title => {
    const newTodo = {
      id: uuid(),
      title: title,
      status: false
    };

    this.setState({
      todos: [newTodo, ...this.state.todos]
    });
  };

  editTodoItem = (title, id) => {
    let newItem = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.title = title;
      }
      return todo;
    });
    this.setState({
      todos: newItem
    });
  };

  render() {
    return (
      <div className="todos_area">
        <div className="container">
          <h3 className="title"> Todo item app </h3>{" "}
          <AddTodo addNewItem={this.addNewItem} />{" "}
          <Todos
            todos={this.state.todos}
            markStatus={this.markStatus}
            deleteTodo={this.deleteTodo}
            editTodoItem={this.editTodoItem}
          />{" "}
        </div>
      </div>
    );
  }
}

export default MainContent;
