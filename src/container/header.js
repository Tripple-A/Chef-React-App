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
    logoutUser();
    services.logout();
  };

  const profile = `/vendor/${user.id}`;
  const newven = `/newVendor/${user.id}`;
  const showLogout = logged_in ? (
    <button onClick={() => retire()}>
      {" "}
      <span className="text-dark-skin text-xl">Log out</span>
    </button>
  ) : (
    <Redirect to="/" />
  );
  let becomeVendorToggler = "";

  if (logged_in && user.vendor) {
    becomeVendorToggler = (
      <Link to={profile} className="text-dark-skin hover:no-underline text-xl">
        Vendor Profile{" "}
      </Link>
    );
  } else if (logged_in && !user.vendor) {
    becomeVendorToggler = (
      <Link to={newven} className="text-dark-skin hover:no-underline text-xl">
        Become a vendor
      </Link>
    );
  } else if (!logged_in) {
    becomeVendorToggler = "";
  }

  return (
    <div className="menuWrapper fixed bg-light-skin z-10 ">
      <div
        className={`logo ${logged_in ? "sm:ml-20" : ""} ${
          !logged_in ? "ml-10" : ""
        } lg:max-w-sm`}
      >
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className={` ${!logged_in ? "hidden" : ""} menu-wrap lg:hidden`}>
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
                <li>
                  <Link
                    className={` ${
                      !logged_in ? "invisible" : ""
                    } menu-link text-dark-skin text-xl`}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>{becomeVendorToggler}</li>
                <li>
                  <Link
                    className={` ${
                      !logged_in ? "invisible" : ""
                    } menu-link text-dark-skin text-xl`}
                    to="#"
                  >
                    Saved vendors
                  </Link>
                </li>
                <li>{showLogout}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={`menuMain ${logged_in ? "bg-light-skin" : "bg-white"} `}>
        <nav
          className={`menuu ${
            logged_in ? "sm:invisible lg:visible" : ""
          } mt-4 flex justify-around text-center mr-20`}
        >
          <div className={`${!logged_in ? "ml-4  mr-20" : ""}`}>
            <Link
              to="/"
              className={` ${
                !logged_in ? "invisible" : ""
              } text-dark-skin hover:no-underline text-xl`}
            >
              Home
            </Link>
          </div>
          <div className={`${!logged_in ? "ml-4  mr-20" : ""}`}>
            <Link
              className={` ${
                !logged_in ? "invisible" : ""
              } text-dark-skin hover:no-underline text-xl`}
            >
              Saved vendors
            </Link>
          </div>

          <div>{becomeVendorToggler}</div>
          <div className="mt-1"> {showLogout} </div>
        </nav>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
