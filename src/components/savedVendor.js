import React, {useState, useEffect} from 'react';
import { apiUrl } from "../helpers/helperFns";


const SavedVendor = ({match}) => {
   const id = match.params.user_id
   const [vendors, setVendors] = useState([])
   useEffect(() => {
    async function fetchData() {
      await fetch(`${apiUrl}savings/${id}`)
        .then(resp => resp.json())
        .then(data => {
          setVendors(data.vendor);
        });
    }
    fetchData();
  }, [id]);
    return(
        <div>
            <h3>Hello there</h3>
        </div>
    )
}

export default SavedVendor;
