import React, { useState } from "react";
import "../styles/FilterVendors.scss";
import states from "../helpers/statesInNigeria";

export const FilterVendors = () => {
  const [vendorLoc, setVendorLoc] = useState("");
  const [specialty, setSpecialty] = useState("");

  const statesInNigeria = states.map((state, index) => (
    <option key={index}>{state}</option>
  ));

  const handleLocationChange = location => {
    setVendorLoc(location);
    console.log(vendorLoc);
  };

  const handleSpecialtyChange = e => {
    setSpecialty(e);
    console.log(specialty);
  };

  const handleSearch = () => {
    console.log(vendorLoc, specialty);
  };
  return (
    <div className="text-center ml-10 mr-10 md:ml-20 md:mr-12">
      <form onSubmit={handleSearch} className="max-w-screen-lg m-auto">
        <div className="mobile-flex flex lg:justify-between">
          <select
            value={vendorLoc}
            onChange={e => handleLocationChange(e.target.value)}
            className="form-control w-6/12 lg:w-2/5 mt-4 mr-4"
          >
            {statesInNigeria}
          </select>
          <select
            className="form-control w-6/12 lg:w-2/5 mt-4"
            value={specialty}
            onChange={e => handleSpecialtyChange(e.target.value)}
          >
            <option>Search by specialty</option>
            <option>All Specialties</option>
            <option>Continental Dishes</option>
            <option>Native Dishes</option>
            <option>Pastries</option>
          </select>
        </div>
        <button type="submit p-2 bg-dark-skin">search</button>
      </form>
    </div>
  );
};
