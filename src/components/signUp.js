import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
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
    password: "",
    password_confirmation: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, email, password} = this.state;
     axios
       .post(
         "http://localhost:3002/registrations",
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
           console.log("creaaateed");
           this.props.loginUser();
           this.props.assignUser(response.data.user);
         } else {
           console.log(response.data.status);
         }
       });
  };

  render() {
    const show = this.props.logged_in ? <Redirect to="/dashboard" /> : "";
    const { name, email, password, password_confirmation } = this.state;
    return (
      <div>
        {show}
        {/* <form className="form-group"> */}
        {/* <input
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
             <input 
             type='password' 
             name='password_confirmation' 
             placeholder='Password Confirmation' 
             value={this.state.password_confirmation}
             onChange={this.handleChange}>
             </input><br></br>
            </form>
                <button className='btn btn-primary' onClick={this.handleSubmit}>SIGN UP</button>
            <h6><Link to='/'>Already a user? Sign In</Link></h6> */}
        <AuthForm
          authHeader="Sign up"
          type="signup"
          name={name}
          email={email}
          password={password}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(SignUp);
