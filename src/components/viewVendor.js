import React, { useState, useEffect }  from 'react';
import { apiUrl } from "../helpers/helperFns";

const ViewVendor = ({match}) => {
  const [profile, setProfile] = useState({});
  const [images, setImages] = useState([]);
  const id = match.params.vendor_id;
  useEffect(() => {
    async function fetchData() {
      await fetch(`${apiUrl}profiles/vendor-${id}`)
        .then(resp => resp.json())
        .then(data => {
          setProfile(data.profile);
          setImages(data.images);
          console.log(data);
        });
    }
    fetchData();
  }, [id]);
  return (
   <div>
     <h1> Hello, how are you doing</h1>
     <h1> Hello, how are you doing</h1>
     <h1> Hello, how are you doing</h1>
     <h1> Hello, how are you doing</h1>
     <h1> Hello, how are you doing</h1>
   </div>
    
    
  )}

export default ViewVendor;
