import React, { useState, useEffect } from "react";
import "../styles/FilterVendors.scss";
import services from "../services/services";
import { Listvendors } from "../components/Listvendors";

export const FilterVendors = () => {
  const [vendors, setVendors] = useState([]);
  const [specialty, setSpecialty] = useState("");
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    async function getProfiles() {
      await services
        .getProfiles()
        .then(response => setVendors(response.data.vendors));
    }
    getProfiles();
  }, []);

  useEffect(() => {
    if (specialty !== "") {
      const displayFilter = vendors.filter(vendor =>
        vendor.specialty.toLowerCase().includes(specialty.toLowerCase())
      );

      setFilterList(displayFilter);
    } else {
      setFilterList(vendors);
    }
  }, [specialty, vendors]);

  const handleSpecialtyChange = ({ target }) => {
    setSpecialty(target.value);
  };

  return (
    <div className="md:ml-20 md:mr-12 min-h-screen">
      <form className="max-w-screen-lg m-auto ">
        <div className="mobile-flex flex lg:justify-between ml-4 mr-4">
          <select
            className="form-control w-6/12 lg:w-2/5 mt-2"
            value={specialty}
            onChange={handleSpecialtyChange}
          >
            <option>All Specialties</option>
            <option>Continental Dishes</option>
            <option>Native Dishes</option>
            <option>Pastries</option>
          </select>
          <div className="text-center mt-2">filter by specialty</div>
        </div>
      </form>
      <div className="pt-10 max-w-screen-lg m-auto min-h-screen">
        <h1 className="text-center text-dark-skin text-5xl">Vendors</h1>
        <Listvendors
          vendorsToDisplay={filterList.length > 0 ? filterList : vendors}
        />
      </div>
    </div>
  );
};
