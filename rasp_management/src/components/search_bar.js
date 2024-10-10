import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


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
