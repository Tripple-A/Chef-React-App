import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { LOGIN, ASSIGNUSER } from "../actions";
import { AuthForm } from "../components/auth/AuthForm";
import services from "../services/services";

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
    errors: "",
    authenticating: false
  };

  async componentDidMount() {
    services
      .checkLoggedIn()
      .then(res => {
        if (res.data.logged_in) {
          this.props.loginUser();
          this.props.assignUser(res.data.user);
        }
      })
      .catch();
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    this.setState({ errors: "" });
    this.setState({ authenticating: true });
    e.preventDefault();

    const { email, password } = this.state;
    const details = { email, password };
    services
      .signin(details)
      .then(response => {
        console.log(response.data);
        if (response.data.status === "created") {
          console.log(response.data.user);
          this.props.loginUser();
          this.props.assignUser(response.data.user);
          this.setState({ authenticating: false });
        } else {
          console.log(response.data.error);
          if (response.data.error !== "") {
            this.setState({ errors: response.data.error });
            this.setState({ authenticating: false });
          } else {
            this.setState({
              errors: "email or Password is incorrect.",
              authenticating: false
            });
          }
        }
      })
      .catch(error =>
        this.setState({
          errors:
            "There was an issue, please try again by filling all fields correctly.",
          authenticating: false
        })
      );
  };

  render() {
    const show = this.props.logged_in ? <Redirect to="/dashboard" /> : "";
    const { email, password, errors, authenticating } = this.state;
    return (
      <div>
        <div>{show}</div>
        <AuthForm
          authHeader="Log in"
          handleSubmit={this.handleSubmit}
          email={email}
          handleChange={this.handleChange}
          password={password}
          errors={errors}
          authenticating={authenticating}
        />
      </div>
    );
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(SignIn);
