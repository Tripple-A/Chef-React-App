import React, { Component } from "react";
import ImageUploader from "react-images-upload";
import axios from "axios";
import { apiUrl } from "../helpers/helperFns";
import { connect } from "react-redux";
import Continental from "../images/meals/continental.jpg";
import Continental2 from "../images/meals/continental2.jpg";
import Continental3 from "../images/meals/continental3.jpg";
import native from "../images/meals/native.jpg";
import native2 from "../images/meals/native2.jpeg";
import native3 from "../images/meals/native3.jpg";
import native4 from "../images/meals/native4.jpg";
import pastries from "../images/meals/pastries.jpg";
import pastries2 from "../images/meals/patries2.jpeg";
import pastries3 from "../images/meals/pastries3.jpg";
import pastries5 from "../images/meals/pastries5.jpg";

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
      .post("${apiUrl}/add", fd)
      .then(res => this.setState({ src: res.data.src }));
  };

  render() {
    const { user } = this.props;
    const pics = data => {
      const conti = [Continental, Continental2, Continental3];
      const nati = [native, native2, native3, native4];
      const pastri = [pastries, pastries2, pastries3, pastries5];
      const ran = arr => Math.floor(Math.random() * Math.floor(arr.length));
      if (data === "Continental Dishes") {
        return conti[ran(conti)];
      } else if (data === "Native Dishes") {
        return nati[ran(nati)];
      } else if (data === "Pastries") {
        return pastri[ran(pastri)];
      }
    };

    const chefs = this.state.chefs.map(chef => (
      <div key={chef.id} className="content col-md-12 row">
        <div className="col-md-5">
          <img className="pics" src={pics(chef.specialty)} alt="website logo" />
        </div>
        <div className="col-md-7 desc">
          <div>
            <span> Company Name: </span> {chef.company_name}
          </div>
          <div>
            {" "}
            <span> Specialty: </span>
            {chef.specialty}
          </div>
          <div>
            {" "}
            <span> Location: </span>
            {chef.location}
          </div>
        </div>
      </div>
    ));
    return (
      <div className="dashboard">
        <div style={{ display: "flex" }}>
          <img src={this.state.src} alt="profile pic" />
          <h4> Hi {user.name}</h4>
          <ImageUploader
            withIcon={true}
            buttonText="Choose images"
            onChange={event => this.fileSelect(event)}
            imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
          />
          <button onClick={this.uploadPic}>upload</button>
        </div>

        <h5> Find vendors by their specialty, location or both.</h5>
        <form className="form-group">
          <select className="form-control">
            <option>All Locations</option>
          </select>
          <select className="form-control">
            <option value="All Specialties">All Specialties</option>
            <option value="Continental Dishes">Continental Dishes</option>
            <option value="Native Dishes">Native Dishes</option>
            <option value="Pastries">Pastries</option>
          </select>
          <button className="btn btn-primary">GO</button>
        </form>

        <div className="container row row1 ">{chefs}</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(Dashboard);
