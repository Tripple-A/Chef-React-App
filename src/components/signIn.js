import React, { Component } from "react";
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
      .get("http://localhost:3002/logged_in", { withCredentials: true })
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
        "http://localhost:3002/sessions",
        {
          email,
          password
        },
        { withCredentials: true }
      )
      .then(response => {
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
    return (
      <div>
        {/* <h3>Welcome to the Foodie App</h3>
                {show}
            <form className="form-group">
             <input
              type='text'
              name='email' 
              placeholder='Username' 
              value={this.state.username} 
              onChange={this.handleChange} required>
             </input> <br></br>
             <input 
             type='password' 
             name='password' 
             placeholder='Password' 
             value={this.state.password} 
             onChange={this.handleChange} required>
             </input> <br></br>
            </form>
                <button type='submit' className='btn btn-primary' onClick={this.handleSubmit}>SIGN IN</button>
              <h6><Link to='/signup'>Not a Member? Sign Up</Link></h6> */}
        <AuthForm authHeader="Log in" type="signup" />
      </div>
    );
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(SignIn);
