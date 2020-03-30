import React from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { Logo } from "../helpers/svgs";
import "./styles/Header.scss";
import { LOGOUT } from "../actions";

const mapStateToProps = state => ({
  logged_in: state.loggedIn,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(LOGOUT)
});

const Header = ({ logged_in, logoutUser, user }) => {
  const retire = () => {
    axios
      .delete("https://foodie-apiv1.herokuapp.com/logout", { withCredentials: true })
      .then(response => {
        if (response.data.logged_out) logoutUser();
      });
  };
  const date = new Date().toDateString();
  const profile = `/vendor/${user.id}`;
  const newven = `/newVendor/${user.id}`;
  const show = logged_in ? <div> Log Out</div> : <Redirect to="/" />;
  const toggle = user.vendor ? (
    <Link to={profile}>Vendor Profile </Link>
  ) : (
    <Link to={newven}>Become a Vendor</Link>
  );
  return (
    <div className="menuWrapper">
      {/* <header>
            FOODIE
            <div className="container-fluid" >
            <nav >
            <ul className="nav">
            <li className="date"> {date}</li>
              <li>{toggle}</li>
              <li>Saved Vendors</li>
                <li  onClick={() => retire()}> {show} </li>
                </ul>      
            </nav>
            </div>
            
           
          </header> */}
      <div className="logo">
        <Logo />
      </div>
      <div className="menuMain">
        <div className="menu">
          <nav >
            <ul className="nav">
            <li className="date"> {date}</li>
              <li>{toggle}</li>
              <li>Saved Vendors</li>
                <li  onClick={() => retire()}> {show} </li>
                </ul>      
            </nav>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
