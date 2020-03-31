import React from "react";

export const Listvendors = () => {
  const vendorProfiles = [
    "vendor 1",
    "vendor 2",
    "vendor 3",
    "vendor 4",
    "vendor 5"
  ];
  const displayVendors = vendorProfiles.map(vendor => (
    <div>
      <p>Vendor name</p>
      <p>Vendor location</p>
      <p>Vendor location</p>
      <p>Vendor location</p>
      <p>Vendor location</p>
    </div>
  ));
  return <div>{displayVendors}</div>;
};
