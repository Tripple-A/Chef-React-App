import React, { useEffect, useState } from "react";
import { uuid } from "uuidv4";
import { Link } from "react-router-dom";
import services from "../services/services";

export const Listvendors = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    async function getProfiles() {
      await services
        .getProfiles()
        .then(response => setVendors(response.data.vendors));
    }
    getProfiles();
  }, []);

  const displayVendors = vendors.map(vendor => (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg bg-white mb-4 md:ml-4 lg:ml-4"
      key={uuid()}
    >
      <Link to={`/${vendor.id}`} className="hover:no-underline text-dark">
        <img
          className="w-full object-cover"
          src={vendor.logo}
          alt="Sunset in the mountains"
        ></img>
        <div className="px-6 py-4 ">
          <div className="font-bold text-xl mb-2 ml-3">
            {vendor.company_name}
          </div>

          <p className="bg-gray-200 rounded-full px-3 py-1">
            <strong>location:</strong> <span>{vendor.location}</span>
          </p>
          <p className="bg-gray-200 rounded-full px-3 py-1">
            <strong>specialty:</strong> <span>{vendor.specialty}</span>
          </p>
          <p className="ml-3 font-medium">{vendor.pitch}</p>
          <Link
            to="/"
            className="hover:no-underline text-white font-semibold bottom-0"
          >
            <p className="bg-dark-skin rounded-md px-3 py-2 w-48 bottom-0">
              book this vendor
            </p>
          </Link>
        </div>
      </Link>
    </div>
  ));
  return (
    <div className="pt-10 max-w-screen-lg m-auto">
      <h1 className="text-center text-dark-skin text-5xl">Vendors</h1>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 m-10 sm:ml-20 lg:ml-10">
        {displayVendors}
      </div>
    </div>
  );
};
