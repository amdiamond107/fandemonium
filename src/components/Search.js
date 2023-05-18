import React from "react";

function Search({}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Events:</label>
      <input
        type="text"
        id="search"
        placeholder="Search for an event you attended..."
      />
    </div>
  );
}

export default Search;