import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <img
          src={require("../../assets/img/banner/react-js-banner.jpg")}
          alt="react-js-banner.jpg"
        />
        <div className="container">
          <div className="content">
            <h3>
              React Todo Apps practice part <br /> Home page Content
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
