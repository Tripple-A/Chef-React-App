import React, { useState, useEffect } from "react";
import ImageForm from "../container/imageForm";
import ProfileForm from "../container/profileForm";
import { apiUrl } from "../helpers/helperFns";
import "../styles/vendorProfile.scss";

const VendorProfile = ({ match }) => {
  const id = match.params.user_id;
  const [profile, setProfile] = useState({});
  useEffect(() => {
    async function fetchData() {
      await fetch(`${apiUrl}profiles/${id}`)
        .then(resp => resp.json())
        .then(data => setProfile(data.profile));
    }
    fetchData();
  }, [id]);
  const name = profile.company_name ? profile.company_name : "New Vendor";
  const src = profile.logo ? profile.logo : "#";
  return (
    <div className="pt-20 bg-light-skin pb-20 profileFormContainer">
      <div className="mt-20 pformWrapper">
        <div className="max-w-lg m-auto bg-gray-400 pt-6 pb-6 pl-4 pr-2 rounded-lg ">
          <h3 className="text-gray-800">Hi, {name} </h3>
          <p className="text-left">
            In order to show up-to-date products to customers, please constantly
            update your profile with your information.
          </p>

          <ProfileForm user_id={id} />
          <div className="mt-4">
            <ImageForm user_id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorProfile;
