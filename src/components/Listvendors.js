import React from "react";
import { uuid } from "uuidv4";

export const Listvendors = () => {
  const vendorProfiles = [
    "vendor 1",
    "vendor 2",
    "vendor 3",
    "vendor 4",
    "vendor 5"
  ];
  const displayVendors = vendorProfiles.map(vendor => (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg bg-white mb-4 lg:ml-4"
      key={uuid()}
    >
      <img
        className="w-full"
        src="https://tailwindcss.com/img/card-top.jpg"
        alt="Sunset in the mountains"
      ></img>
      <div className="px-6 py-4 ">
        <div className="font-bold text-xl mb-2">Vendor name</div>
        <p>Vendor location</p>
        <p>Vendor location</p>
      </div>
    </div>
  ));
  return (
    <div className="pt-10 max-w-screen-lg m-auto ">
      <h1 className="text-center text-dark-skin text-5xl">Vendors</h1>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 m-10 sm:ml-20 lg:ml-10">
        {displayVendors}
      </div>
    </div>
  );
};
