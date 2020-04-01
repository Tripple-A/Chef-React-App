import React, {useState, useEffect} from "react";
import ImageForm from '../container/imageForm';
import ProfileForm from "../container/profileForm";
import { apiUrl } from "../helpers/helperFns";

const VendorProfile = ({ match }) => {
  const id = match.params.user_id;
  const [profile, setProfile] = useState({})
  useEffect(() => {
    async function fetchData(){
      await fetch(`${apiUrl}profiles/${id}`)
      .then(resp => resp.json())
      .then(data =>  setProfile(data.profile)
      )
    }
   fetchData(); 
},[id])
const name = profile.company_name? profile.company_name : 'New Vendor'
const src = profile.logo? profile.logo : '#'
  return (
    <div>
      <h3>Hi {name}</h3>
      
      <h3>
        {" "}
        In order to show up-to-date products to customers,please constantly
        update your profile with your information
      </h3>
      
      <ProfileForm user_id={id}/>
      <ImageForm user_id={id} />
    </div>
  );
};

export default VendorProfile;
