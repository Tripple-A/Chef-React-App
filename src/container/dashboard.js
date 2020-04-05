import React, { Component } from "react";
import axios from "axios";
import "../styles/Dashboard.scss";
import { apiUrl } from "../helpers/helperFns";
import { connect } from "react-redux";
import { FilterVendors } from "./FilterVendors";

const mapStateToProps = state => ({
  user: state.user,
  logged_in: state.loggedIn
});

class Dashboard extends Component {
  state = {
    chefs: [],
    image: []
  };
  async componentDidMount() {
    await axios.get(`${apiUrl}/chefs`).then(res => {
      if (res.data.status === 200) {
        this.setState({ chefs: res.data.chefs });
        // console.log("yes!!");
      }
    });
  }

  fileSelect = picture => {
    this.setState({ image: picture[0] });
  };
  uploadPic = () => {
    console.log(this.state.image);
    const fd = new FormData();
    fd.append("image", this.state.image);
    fd.append("id", this.props.user.id);
    axios
      .post(`${apiUrl}/add`, fd)
      .then(res => this.setState({ src: res.data.src }));
  };

  render() {
    const { user } = this.props;
    return (
      <div className="bg-light-skin min-h-screen">
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
