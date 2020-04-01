import React from "react";
import ProfileForm from "../container/profileForm";
import "../styles/vendorProfile.scss";


const VendorProfile = ({ match }) => {
  const id = match.params.user_id;
  return (
    <div className="pt-20 bg-light-skin pb-20 profileFormContainer">
      <div className="mt-20 pformWrapper">
        <div className="max-w-lg m-auto bg-gray-400 pt-6 pb-6 pl-4 pr-2 rounded-lg ">
          <h3 className="text-gray-800">Hi New Vendor</h3>
          <p className="text-left">
            In order to show up-to-date products to customers, please constantly
            update your profile with your information.
          </p>
          <ProfileForm user_id={id} />
        </div>
      </div>
    </div>
  );
};

export default VendorProfile;
