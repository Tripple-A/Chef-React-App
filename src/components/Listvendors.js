import React from "react";
import { Link } from "react-router-dom";
import { uuid } from "uuidv4";

export const Listvendors = ({ vendorsToDisplay, isSearchEmpty }) => {
  const displayVendors = vendorsToDisplay.map(vendor => (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg bg-white mb-4 md:ml-4 lg:ml-4 pb-4"
      key={uuid()}
    >
      <img
        className="w-full object-cover"
        src={
          vendor.logo === "null" || " "
            ? "https://thumbs.dreamstime.com/b/yummy-smile-tongue-heart-shape-creative-symbol-concept-delicious-taste-pleasure-abstract-business-logo-idea-tasty-food-cook-156932798.jpg"
            : vendor.logo
        }
        alt="vendor logo"
      ></img>

      <div className="px-6 py-4 max-h-full">
        <div className="font-bold text-xl mb-2 ml-3">{vendor.company_name}</div>

        <p className="bg-gray-200 rounded-full px-3 py-1">
          <strong>location:</strong> <span>{vendor.location}</span>
        </p>
        <p className="bg-gray-200 rounded-full px-3 py-1">
          <strong>specialty:</strong> <span>{vendor.specialty}</span>
        </p>
        <p className="ml-3 font-medium">{vendor.pitch}</p>
      </div>
      <div className="bg-dark-skin rounded-md px-3 py-2 w-48 ml-10 text-center">
        <Link to={`/viewvendor/${vendor.id}`} className="hover:no-underline">
          {" "}
          <span className="text-white font-semibold  ">View Vendor</span>
        </Link>
      </div>
    </div>
  ));
  return (
    <div className=" grid md:grid-cols-2 lg:grid-cols-3 m-10 sm:ml-20 lg:ml-10 ">
      {displayVendors}
    </div>
  );
};
