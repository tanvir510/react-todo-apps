import React, { Component } from "react";

class PortfolioForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    bio: "",
    skills: []
  };
  changeHandler = e => {
    if (e.target.type === "checkbox") {
      if (e.target.checked) {
        this.setState({
          ...this.state,
          skills: this.state.skills.concat(e.target.value)
        });
      } else {
        this.setState({
          ...this.state,
          skills: this.state.skills.filter(skill => {
            skill !== e.target.value;
          })
        });
      }
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };
  submitHandler = e => {
    e.preventDefault();
    this.setState({
      name: "",
      email: "",
      password: "",
      bio: "",
      skills: []
    });
    console.log(this.state);
  };
  render() {
    return (
      <form className="contact_form" onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="name">Your Name Here</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name..."
            name="name"
            onChange={this.changeHandler}
            value={this.state.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Name Here</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email..."
            name="email"
            onChange={this.changeHandler}
            value={this.state.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Your Name Here</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password..."
            name="password"
            onChange={this.changeHandler}
            value={this.state.password}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Your Name Here</label>
          <textarea
            style={{ height: "150px" }}
            type="bio"
            className="form-control"
            id="bio"
            placeholder="Enter your bio..."
            name="bio"
            onChange={this.changeHandler}
            value={this.state.bio}
          />
        </div>
        <div className="form-group">
          <label className="skills_title"> Choose your skills:</label>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="react"
              name="skills"
              value="react"
              onChange={this.changeHandler}
            />
            <label className="form-check-label" htmlFor="react">
              React
            </label>
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="node"
              name="skills"
              value="node"
              onChange={this.changeHandler}
            />
            <label className="form-check-label" htmlFor="node">
              Node JS
            </label>
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="vue"
              name="skills"
              onChange={this.changeHandler}
              value="vue"
            />
            <label className="form-check-label" htmlFor="vue">
              Vue JS
            </label>
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="angular"
              name="skills"
              value="angular"
              onChange={this.changeHandler}
            />
            <label className="form-check-label" htmlFor="angular">
              Angular JS
            </label>
          </div>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default PortfolioForm;
