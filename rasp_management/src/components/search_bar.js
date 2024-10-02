import React from "react";
import { useState } from "react";


const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="input-group">
      <input
        type="search"
        className="form-control"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
      />
      <button 
        type="button" 
        className="btn btn-primary" 
        onClick={handleSearch}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;
