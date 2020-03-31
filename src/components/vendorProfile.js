import React from "react";
import ProfileForm from "../container/profileForm";

const VendorProfile = ({ match }) => {
  const id = match.params.user_id;
  return (
    <div>
      <h3>Hi New Vendor</h3>
      <h3>
        {" "}
        In order to show up-to-date products to customers,please constantly
        update your profile with your information
      </h3>
      <ProfileForm user_id={id}/>
    </div>
  );
};

export default VendorProfile;
