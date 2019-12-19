import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <img
          src={require("../../assets/img/banner/react-js-banner.jpg")}
          alt="react-js-banner.jpg"
        />
        <div className="container">
          <div className="content">
            <h3>
              React Todo Apps practice part <br /> Contact page Content
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
