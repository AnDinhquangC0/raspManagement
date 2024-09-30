import React, { useState } from "react";
import SearchBar from "./search_bar";
import Dropdown from "./dropdown";
import { Button } from "bootstrap";

const ModalNodesList = () => {
  const [searchData, setSearchData] = useState("");

  const handleSearch = (query) => {
    setSearchData(query);
  };

  return (
    <div className="modal-nodes-list p-2">
      <SearchBar onSearch={handleSearch} />
      <div className="row align-items-center">
        <div className="col">
          <Dropdown
            options={[
              { label: "All", value: "all" },
              { label: "Node 1", value: "node1" },
              { label: "Node 2", value: "node2" },
              { label: "Node 3", value: "node3" },
            ]}
            onSelect={(option) => console.log(option)}
            labelText="State"
          ></Dropdown>
        </div>
        <div className="col">
          <Dropdown
            options={[
              { label: "All", value: "all" },
              { label: "Node 1", value: "node1" },
              { label: "Node 2", value: "node2" },
              { label: "Node 3", value: "node3" },
            ]}
            onSelect={(option) => console.log(option)}
            labelText="Service"
          ></Dropdown>
        </div>
        <div className="col">
          <Dropdown
            options={[
              { label: "All", value: "all" },
              { label: "Node 1", value: "node1" },
              { label: "Node 2", value: "node2" },
              { label: "Node 3", value: "node3" },
            ]}
            onSelect={(option) => console.log(option)}
            labelText="Location"
          ></Dropdown>
        </div>
        <div className="col-auto pt-4">
          <button
            type="button"
            className="btn btn-secondary"
            id="more-filter-btn"
          >
            More Filter
          </button>
        </div>
        <div className="col-auto pt-4">
          <button
            type="button"
            className="btn btn-primary"
            id="add-node-btn"
          >
            <i class="fas fa-download"></i> Add Node
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalNodesList;
