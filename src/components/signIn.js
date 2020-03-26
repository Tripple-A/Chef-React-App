import React, { Component } from "react";
import { apiUrl } from "../helpers/helperFns";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { LOGIN, ASSIGNUSER } from "../actions";
import { AuthForm } from "./auth/AuthForm";

const mapStatetoProps = state => ({
  logged_in: state.loggedIn
});

const mapDispatchToProps = dispatch => ({
  assignUser: user => dispatch(ASSIGNUSER(user)),
  loginUser: () => dispatch(LOGIN)
});

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    errors: ""
  };

  async componentDidMount() {
    await axios
      .get(`${apiUrl}/logged_in`, {
        withCredentials: true
      })
      .then(res => {
        if (res.data.logged_in) {
          this.props.loginUser();
          this.props.assignUser(res.data.user);
        }
      });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;

    axios
      .post(
        `${apiUrl}/sessions`,
        {
          email,
          password
        },
        { withCredentials: true }
      )
      .then(response => {
        console.log(response);
        if (response.data.status === "created") {
          console.log(response.data.user);
          this.props.loginUser();
          this.props.assignUser(response.data.user);
        } else {
          console.log(response.data.error);
          if (response.data.error !== "")
            this.setState({ errors: response.data.error });
          else this.setState({ errors: "Email or Password incorrect" });
        }
      });
  };

  render() {
    const show = this.props.logged_in ? (
      <Redirect to="/dashboard" />
    ) : (
      <div> {this.state.errors} </div>
    );
    const { email, password } = this.state;
    return (
      <div>
        <div>{show}</div>
        <AuthForm
          authHeader="Log in"
          handleSubmit={this.handleSubmit}
          email={email}
          handleChange={this.handleChange}
          password={password}
        />
      </div>
    );
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(SignIn);
