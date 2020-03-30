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
        console.log("yes!!");
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
    // const pics = data => {
    //   // const conti = [Continental, Continental2, Continental3];
    //   // const nati = [native, native2, native3, native4];
    //   // const pastri = [pastries, pastries2, pastries3, pastries5];
    //   const ran = arr => Math.floor(Math.random() * Math.floor(arr.length));
    //   if (data === "Continental Dishes") {
    //     return conti[ran(conti)];
    //   } else if (data === "Native Dishes") {
    //     return nati[ran(nati)];
    //   } else if (data === "Pastries") {
    //     return pastri[ran(pastri)];
    //   }
    // };

    // const chefs = this.state.chefs.map(chef => (
    //   <div key={chef.id} className="content col-md-12 row">
    //     <div className="col-md-5">
    //       <img className="pics" src={pics(chef.specialty)} alt="website logo" />
    //     </div>
    //     <div className="col-md-7 desc">
    //       <div>
    //         <span> Company Name: </span> {chef.company_name}
    //       </div>
    //       <div>
    //         {" "}
    //         <span> Specialty: </span>
    //         {chef.specialty}
    //       </div>
    //       <div>
    //         {" "}
    //         <span> Location: </span>
    //         {chef.location}
    //       </div>
    //     </div>
    //   </div>
    // ));
    return (
      <div className="bg-light-skin min-h-screen">
        {/* <div style={{ display: "flex" }}>
          <img src={this.state.src} alt="profile pic" />
          <h4 className="text-blue-300"> Hi {user.name}</h4>
          <ImageUploader
            withIcon={true}
            buttonText="Choose images"
            onChange={event => this.fileSelect(event)}
            imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
          />
          <button onClick={this.uploadPic}>upload</button>
        </div>

        <h5 class="text-red-400">
          {" "}
          Find vendors by their specialty, location or both.
        </h5>
        <form className="form-group">

          <button className="btn btn-primary">GO</button>
        </form>

        <div className="container row row1 ">{chefs}</div> */}
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
