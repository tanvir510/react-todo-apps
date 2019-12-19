import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="about">
        <img
          src={require("../../assets/img/banner/react-js-banner.jpg")}
          alt="react-js-banner.jpg"
        />
        <div className="container">
          <div className="content">
            <h3>
              React Todo Apps practice part <br /> About page Content{" "}
            </h3>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default About;
