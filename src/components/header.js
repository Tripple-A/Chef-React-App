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
      .delete("http://localhost:3002/logout", { withCredentials: true })
      .then(response => {
        if (response.data.logged_out) logoutUser();
      });
  };

  const date = new Date().toDateString();
  const profile = `/vendor/${user.id}`;
  const newven = `/newVendor/${user.id}`;
  const show = logged_in ? <div> Log Out</div> : <Redirect to="/" />;
  let toggle = "";

  if (logged_in && user.vendor) {
    toggle = <Link to={profile}>Vendor Profile </Link>;
  } else if (logged_in && !user.vendor) {
    toggle = <Link to={newven}>Become a Vendor</Link>;
  } else if (!logged_in) {
    toggle = "";
  }

  return (
    <div className="menuWrapper">
      <div className="logo">
        <Logo />
      </div>
      <div className="menuMain">
        <nav className="menu">
          <div className="date">{date}</div>
          <div>see vendors</div>
          <div>{toggle}</div>
          <div onClick={() => retire()}> {show} </div>
        </nav>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
