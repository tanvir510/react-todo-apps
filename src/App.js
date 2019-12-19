import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./component/Navbar";
import Navigation from "./component/Navigation";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main_area">
          <Navbar />
          <Navigation />
        </div>{" "}
      </BrowserRouter>
    );
  }
}

export default App;
