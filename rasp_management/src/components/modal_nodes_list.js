import React, { useState } from "react";
import SearchBar from "./search_bar";
import Dropdown from "./dropdown";
import { Button } from "bootstrap";

const ModalNodesList = () => {
  const [searchData, setSearchData] = useState("");

  const [newNodesData, setNewNodesData] = useState([
    { id: "1", service: "Service A", location: "Location 1" },
    { id: "2", service: "Service B", location: "Location 2" },
    { id: "3", service: "Service C", location: "Location 3" },
    { id: "4", service: "Service D", location: "Location 4" },
  ]);
  const [knownNodesData, setKnownNodesData] = useState([
    { id: "1", service: "Service A", location: "Location 1", info: "Raspberry info 1" },
    { id: "2", service: "Service B", location: "Location 2", info: "Raspberry info 2" },
    { id: "3", service: "Service C", location: "Location 3", info: "Raspberry info 3" },
    { id: "4", service: "Service D", location: "Location 4", info: "Raspberry info 4" },
  ]);

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
          />
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
          />
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
          />
        </div>
        <div className="col-auto pt-4">
          <button type="button" className="btn btn-secondary" id="more-filter-btn">
            More Filter
          </button>
        </div>
        <div className="col-auto pt-4">
          <button type="button" className="btn btn-primary" id="add-node-btn">
            <i className="fas fa-download"></i> Add Node
          </button>
        </div>
      </div>

      <div className="mt-2">
        <a
          data-bs-toggle="collapse"
          data-bs-target="#collapse"
          role="button"
          aria-expanded="false"
          aria-controls="collapse"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          New Nodes <i className="fas fa-chevron-down"></i>
        </a>
        <div className="collapse" id="collapse">
          <table className="table" id="table_new_nodes">
            <thead>
              <tr>
                <th></th>
                <th>Node ID</th>
                <th>SDR Service</th>
                <th>Location</th>
                <th width="50px"></th>
              </tr>
            </thead>
            <tbody>
              {newNodesData.map((node) => (
                <tr key={node.id}>
                  <td>
                    <input id={node.id} type="checkbox" />
                  </td>
                  <td>{node.id}</td>
                  <td>{node.service}</td>
                  <td>{node.location}</td>
                  <td>
                    <button className="btn btn-primary btn-sm" id={node.id}>
                      <i className="fas fa-circle-plus"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-2">
        <a
          data-bs-toggle="collapse"
          data-bs-target="#collapse1"
          role="button"
          aria-expanded="false"
          aria-controls="collapse1"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Known Nodes <i className="fas fa-chevron-down"></i>
        </a>
        <div className="collapse" id="collapse1">
          <table className="table" id="table_known_nodes">
            <thead>
              <tr>
                <th>Node ID</th>
                <th>Raspberry info</th>
                <th>SDR Service</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {knownNodesData.map((node) => (
                <tr key={node.id}>
                  <td>{node.id}</td>
                  <td>{node.info}</td>
                  <td>{node.service}</td>
                  <td>{node.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default ModalNodesList;
