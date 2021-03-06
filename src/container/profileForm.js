import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import states from "../helpers/statesInNigeria";

export default class ProfileForm extends Component {
  state = {
    company_name: "",
    location: "",
    specialty: "",
    pitch: "",
    logo: "",
    phone_number: "",
    change: false
  };

  componentDidMount = () => {
    this.setState({ change: false });
  };

  uploadWidget = widget => {
    widget.open();
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleForm = e => {
    e.preventDefault();
    const form = document.querySelector(".pform");
    form.style.display === "none"
      ? (form.style.display = "block")
      : (form.style.display = "none");
  };
  createProfile = e => {
    e.preventDefault();
    const {
      company_name,
      location,
      specialty,
      pitch,
      logo,
      phone_number
    } = this.state;
    axios
      .post(
        "https://foodie-apiv1.herokuapp.com/profiles",
        {
          company_name,
          location,
          specialty,
          pitch,
          logo,
          phone_number,
          user_id: this.props.user_id
        },
        { withCredentials: true }
      )
      .then(res => {
        this.toggleForm(e);
        this.setState({ change: true });
      })
      .catch(e => console.log(e.response));
  };
  render() {
    const show = this.state.change ? <Redirect to="/dashboard" /> : "";
    const showStates = states.map(state => (
      <option value={state} key={state}>
        {state}
      </option>
    ));
    const {
      companyName,
      location,
      specialty,
      pitch,
      phone_number
    } = this.state;
    let myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "da3ukbr9v",
        uploadPreset: "ocyrrq39"
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          const url = result.info.secure_url;
          this.setState({ logo: url });
        } else {
        }
      }
    );
    return (
      <div>
        <div>{show}</div>
        <button
          onClick={this.toggleForm}
          className="bg-gray-200 rounded-md px-2 py-1 md:text-base font-medium text-gray-700 sm:mr-2 mt-2"
        >
          <span className="">fill or update your profile form</span>
        </button>{" "}
        <form
          className="form-group pform pt-4 pr-4 text-white"
          style={{ display: "none" }}
        >
          <label>Company name: </label>
          <input
            className="form-control"
            name="company_name"
            required
            onChange={this.handleChange}
            value={companyName}
          ></input>
          <label>Phone number(WhatsApp): </label>
          <input
            className="form-control"
            required
            onChange={this.handleChange}
            value={phone_number}
            name="phone_number"
            placeholder="+234808...."
          ></input>
          <label className="pt-2">Specialty</label>
          <select
            className="form-control"
            name="specialty"
            onChange={this.handleChange}
            value={specialty}
          >
            <option value="Continental Dishes">Continental Dishes</option>
            <option value="Native Dishes">Native Dishes</option>
            <option value="Native and Continental Dishes">
              Native and Continental Dishes
            </option>
            <option value="Pastries">Pastries</option>
          </select>
          <label className="pt-2">Location</label>
          <select
            className="form-control"
            name="location"
            onChange={this.handleChange}
            value={location}
          >
            {showStates}
          </select>
          <label className="pt-2">Elevator Pitch</label>
          <input
            className="form-control"
            required
            name="pitch"
            onChange={this.handleChange}
            value={pitch}
          ></input>
          <div className="pt-2">
            <label className="font-semibold mt-2">
              Upload your company logo (optional)
            </label>
          </div>
          <button
            id="upload_widget"
            className="cloudinary-button"
            onClick={() => this.uploadWidget(myWidget)}
          >
            Click to upload
          </button>{" "}
          <br></br>
          <button onClick={this.createProfile} className="mt-4">
            <span className="mr-2 pt-2 pb-2 pl-4 pr-4 rounded-lg bg-teal-700 font-medium  text-white text-semibold ">
              Save
            </span>
          </button>
          <button onClick={this.toggleForm}>
            <span className="mr-2 pt-2 pb-2 pl-4 pr-4 rounded-lg bg-white text-red-400 font-medium">
              Cancel
            </span>{" "}
          </button>
        </form>
      </div>
    );
  }
}
