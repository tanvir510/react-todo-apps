import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="logo">
            {" "}
            <Link to="/"> Logo </Link>{" "}
          </div>{" "}
          <nav className="navbar_list">
            <ul>
              <li>
                <Link exact="true" to="/">
                  Home{" "}
                </Link>{" "}
              </li>{" "}
              <li>
                <Link to="/about"> About </Link>{" "}
              </li>{" "}
              <li>
                <Link to="/todos"> Todos </Link>{" "}
              </li>{" "}
              <li>
                <Link to="/posts"> Posts </Link>{" "}
              </li>{" "}
              <li>
                <Link to="/contact"> Contact </Link>{" "}
              </li>{" "}
            </ul>{" "}
          </nav>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default Navbar;
