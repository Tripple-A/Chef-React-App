import React, { useState, useEffect } from "react";
import { apiUrl } from "../helpers/helperFns";
import { Listvendors } from "../components/Listvendors";

const SavedVendor = ({ match }) => {
  const id = match.params.user_id;
  const [vendors, setVendors] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await fetch(`${apiUrl}savings/${id}`)
        .then(resp => resp.json())
        .then(data => {
          setVendors(data.saved_vendors);
        });
    }
    fetchData();
  }, [id]);

  return (
    <div className="bg-light-skin pt-20 min-h-full pb-20">
      <div className="pt-2 max-w-screen-lg m-auto min-h-screen">
        <h1 className="text-center text-dark-skin md:text-4xl">
          Your saved vendors
        </h1>
        <div>
          {!vendors.length ? (
            <div className="text-center text-white text-2xl">
              You currently have no saved vendors{" "}
            </div>
          ) : (
            <Listvendors vendorsToDisplay={vendors} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SavedVendor;
