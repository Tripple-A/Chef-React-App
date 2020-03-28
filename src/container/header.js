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
    becomeVendorToggler = (
      <Link to={profile} className="text-dark-skin">
        Vendor Profile{" "}
      </Link>
    );
  } else if (logged_in && !user.vendor) {
    becomeVendorToggler = (
      <Link to={newven} className="text-dark-skin">
        become a vendor
      </Link>
    );
  } else if (!logged_in) {
    becomeVendorToggler = "";
  }

  return (
    <div className="menuWrapper fixed lg:max-w-sm">
      <div
        className={`logo ${logged_in ? "md:ml-20" : ""} ${
          !logged_in ? "ml-10" : ""
        }`}
      >
        <Logo />
      </div>
      <div className={` ${!logged_in ? "hidden" : ""}menu-wrap lg:hidden`}>
        <input
          type="checkbox"
          className={` ${!logged_in ? "hidden" : "toggler"}`}
        />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>{becomeVendorToggler}</li>
                <li>
                  <Link
                    className={` ${
                      !logged_in ? "invisible" : ""
                    } menu-link text-dark-skin`}
                    to="#"
                  >
                    saved vendors
                  </Link>
                </li>
                <li>{showLogout}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={`menuMain ${logged_in ? "bg-light-skin" : ""} `}>
        <nav
          className={`menuu ${
            logged_in ? "md:invisible lg:visible" : ""
          } mt-4 flex justify-around text-center mr-20`}
        >
          <div className={`${!logged_in ? "ml-4  mr-20" : ""}`}>
            <Link
              className={` ${!logged_in ? "invisible" : ""} text-dark-skin`}
            >
              see vendors
            </Link>
          </div>
          <div>{becomeVendorToggler}</div>
          <div> {showLogout} </div>
        </nav>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
