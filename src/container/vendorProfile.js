import React, { useState, useEffect } from "react";
import ImageForm from "./imageForm";
import ProfileForm from "./profileForm";
import { apiUrl } from "../helpers/helperFns";
import { ProfileInfo } from "../components/ProfileInfo";
import "../styles/vendorProfile.scss";

const VendorProfile = ({ match }) => {
  const id = match.params.user_id;
  const [profile, setProfile] = useState({});
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setIsLoaded(false);
      await fetch(`${apiUrl}profiles/${id}`)
        .then(resp => resp.json())
        .then(data => {
          setProfile(data.profile);
          setImages(data.images);
          setIsLoaded(true);
        });
    }
    fetchData();
  }, [id]);
  const name = profile.company_name ? profile.company_name : "New Vendor";
  return (
    <div className="pt-10 bg-light-skin pb-20 profileFormContainer">
      <div className="mt-20 pformWrapper">
        <div className="md:max-w-lg lg:max-w-3xl m-auto bg-dark-skin pt-6 pb-6 pl-4 pr-2 rounded-lg">
          <h3 className="text-white">Hi, {name} </h3>
          <p className="text-left text-white mb-2">
            In order to show up-to-date products to customers, please constantly
            update your profile with your information.
          </p>

          <ProfileForm user_id={id} />
        </div>
        <div className="py-4 px-3 sm:px-4 md:max-w-lg lg:max-w-3xl m-auto bg-orange-300 rounded-lg">
          <p className="mb-3">Upload images from your past events.</p>
          <ImageForm user_id={id} />
        </div>
        <div className="md:max-w-lg lg:max-w-3xl m-auto">
          <ProfileInfo
            vendorName={profile.company_name}
            specialty={profile.specialty}
            location={profile.location}
            pitch={profile.pitch}
            images={images}
            isLoaded={isLoaded}
          />
        </div>
      </div>
    </div>
  );
};

export default VendorProfile;
