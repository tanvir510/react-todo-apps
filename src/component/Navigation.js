import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import MainTodos from "./pages/MainTodos";
import MainPosts from "./pages/MainPosts";
import Contact from "./pages/Contact";

class Navigation extends Component {
  render() {
    return (
      <div className="home">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>{" "}
          <Route path="/about">
            <About />
          </Route>{" "}
          <Route path="/todos">
            <MainTodos />
          </Route>{" "}
          <Route path="/posts">
            <MainPosts />
          </Route>{" "}
          <Route path="/contact">
            <Contact />
          </Route>{" "}
        </Switch>{" "}
      </div>
    );
  }
}

export default Navigation;
