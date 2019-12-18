import React, { Component } from "react";
import { link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li>
            <link to="/">Home</link>
          </li>
          <li>
            <link to="/HomePost">About</link>
          </li>
          <li>
            <link to="/MainPost">Main</link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
