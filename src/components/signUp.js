import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { apiUrl } from "../helpers/helperFns";
import { AuthForm } from "../components/auth/AuthForm";
import { LOGIN, ASSIGNUSER } from "../actions";

const mapStatetoProps = state => ({
  logged_in: state.loggedIn
});

const mapDispatchToProps = dispatch => ({
  assignUser: user => dispatch(ASSIGNUSER(user)),
  loginUser: () => dispatch(LOGIN)
});

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    errors: "",
    password: "",
    password_confirmation: "",
    authenticating: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ authenticating: true });
    const { name, email, password } = this.state;
    axios
      .post(
        `${apiUrl}/registrations`,
        {
          name,
          email,
          password,
          password_confirmation: password
        },
        { withCredentials: true }
      )
      .then(response => {
        console.log(response);
        if (response.data.status === "created") {
          this.setState({ authenticating: false });
          console.log("creaaateed");
          this.props.loginUser();
          this.props.assignUser(response.data.user);
        } else {
          this.setState({
            errors: "The email you have entered is already in use."
          });
          this.setState({ authenticating: false });
        }
      })
      .catch(error => {
        this.setState({ errors: "There was a problem signing you up." });
        this.setState({ authenticating: false });
      });
  };

  render() {
    const show = this.props.logged_in ? <Redirect to="/dashboard" /> : "";
    const { name, email, password, errors } = this.state;
    return (
      <div>
        {show}
        <AuthForm
          authHeader="Sign up"
          type="signup"
          name={name}
          email={email}
          password={password}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          errors={errors}
        />
      </div>
    );
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(SignUp);
