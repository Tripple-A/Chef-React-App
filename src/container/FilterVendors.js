import React, { useState } from "react";

export const FilterVendors = () => {
  const [search, setSearch] = useState("");

  const handleChange = searchTerm => {
    setSearch(searchTerm.target.value);
    console.log(search);
  };

  return (
    <div className="text-center">
      <input
        type="text"
        className="w-6/12"
        value={search}
        onChange={e => handleChange(e)}
      />
    </div>
  );
};
