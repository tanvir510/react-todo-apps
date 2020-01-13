import React, { Component } from "react";
import axios from "axios";

const base_url = "https://jsonplaceholder.typicode.com";

class PortfolioForm extends Component {
  state = {
    title: "",
    body: "",
    userId: 112,
    isSuccess: false,
    isError: false
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submitHandler = e => {
    e.preventDefault();
    axios
      .post(`${base_url}/posts`, {
        title: this.state.title,
        body: this.state.body,
        userId: this.state.userId
      })
      .then(res => {
        this.setState({
          body: "",
          title: "",
          isSuccess: true,
          isError: false
        });
      })
      .catch(error => {
        this.setState({
          isError: true
        });
      });
  };
  render() {
    return (
      <form
        className="form_data"
        style={{ paddingTop: "25px" }}
        onSubmit={this.submitHandler}
      >
        <div className="form-groups">
          <label htmlFor="title">Form Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter your title..."
            className="form-control"
            onChange={this.changeHandler}
            value={this.state.title}
          />
        </div>
        <div className="form-groups" style={{ paddingTop: "15px" }}>
          <label htmlFor="body">Form Body</label>
          <textarea
            style={{ height: "120px" }}
            type="text"
            name="body"
            id="body"
            placeholder="Enter your body..."
            className="form-control"
            onChange={this.changeHandler}
            value={this.state.body}
          />
        </div>
        <button className="btn btn-success" style={{ marginTop: "15px" }}>
          Submit
        </button>
        {this.state.isSuccess && <p>Form data posted successfully</p>}
        {this.state.isError && <p>Something wrong in your code!</p>}
      </form>
    );
  }
}

export default PortfolioForm;
