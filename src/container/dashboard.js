import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "../styles/Dashboard.scss";
import { connect } from "react-redux";
import { FilterVendors } from "./FilterVendors";

const mapStateToProps = state => ({
  user: state.user,
  logged_in: state.loggedIn
});

class Dashboard extends Component {

  render() {
    const { user, logged_in } = this.props;
    const showDashboard = logged_in? '' : <Redirect to="/" />
    return (
      <div className="bg-light-skin min-h-screen">
        <div>{showDashboard}</div>
        <div className="md:flex md:justify-between md:ml-20 md:mr-6 max-w-screen-lg m-auto dashboard-grid">
          <div className="md:ml-20 text-dark-skin dashboard-text">
            <h2 className="sm:text-2xl md:text-5xl md:block md:mt-20 dash">
              Dashboard
            </h2>
            <p className="sm:ml-4 md:ml-2 font-semibold text-dark today ">
              What would you like to do today?
            </p>
          </div>
          <div className="sm:mt-4 text-dark-skin sm:mr-20 welcome">
            <div className="bg-dark-skin md:w-full ml-4 md:text-right p-2 md:p-4 md:text-xl font-semibold text-white rounded-md md:mt-20 welcome-text">
              Welcome, {user.name}
            </div>
            <p className="font-medium md:text-right mt-2 balance">
              Wallet balance: <span className="text-dark">N2,000</span>
            </p>
          </div>
        </div>
        <FilterVendors />
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(Dashboard);
