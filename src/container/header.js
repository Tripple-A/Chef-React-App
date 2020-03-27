import React from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import services from "../services/services";
import { Logo } from "../helpers/svgs";
import "../styles/Header.scss";
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
    services.logout().then(response => {
      if (response.data.logged_out) logoutUser();
    });
  };

  const date = new Date().toDateString();
  const profile = `/vendor/${user.id}`;
  const newven = `/newVendor/${user.id}`;
  const showLogout = logged_in ? (
    <button onClick={() => retire()}>
      {" "}
      <span className="text-dark-skin">log out</span>
    </button>
  ) : (
    <Redirect to="/" />
  );
  let becomeVendorToggler = "";

  if (logged_in && user.vendor) {
    becomeVendorToggler = <Link to={profile}>Vendor Profile </Link>;
  } else if (logged_in && !user.vendor) {
    becomeVendorToggler = (
      <button>
        <Link to={newven} className="text-dark-skin">
          become a vendor
        </Link>
      </button>
    );
  } else if (!logged_in) {
    becomeVendorToggler = "";
  }

  return (
    <div className="menuWrapper ">
      <div className="logo">
        <Logo />
      </div>
      <div className={`menuMain ${logged_in ? "bg-light-skin" : ""} `}>
        <nav
          className={`menu ${
            logged_in ? "md:invisible lg:visible" : ""
          } mt-4 flex justify-around text-center`}
        >
          <div className={`${!logged_in ? "visible" : "invisible"}`}>
            {date}
          </div>
          <div className={`${!logged_in ? "ml-4  mr-20" : ""}`}>
            <Link className="text-dark-skin">see vendors</Link>
          </div>
          <div>{becomeVendorToggler}</div>
          <div> {showLogout} </div>
        </nav>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
