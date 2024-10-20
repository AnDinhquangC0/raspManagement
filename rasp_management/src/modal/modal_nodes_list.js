import React, { useState } from "react";
import SearchBar from "../components/search_bar";
import Dropdown from "../components/dropdown";
import { Button } from "bootstrap";
import ModalNodeInfo from "./modal_node_info";

const ModalNodesList = ({ isShow, hide }) => {
  const [searchData, setSearchData] = useState("");
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);

  // State to manage modal node info type and idh
  const [modalType, setModalType] = useState("");
  const [nodeId, setNodeId] = useState("");

  // State to manage modal node info visibility
  const [showModal, setShowModal] = useState(false);
  // Function to show/close the modal
  const handleShow = (id, type) => {
    setShowModal(true);
    setNodeId(id);
    setModalType(type);
  }
  const handleClose = () => setShowModal(false);

  const [newNodesData, setNewNodesData] = useState([
    { id: "1", service: "Service A", location: "Location 1" },
    { id: "2", service: "Service B", location: "Location 2" },
    { id: "3", service: "Service C", location: "Location 3" },
    { id: "4", service: "Service D", location: "Location 4" },
  ]);
  const [knownNodesData, setKnownNodesData] = useState([
    {
      id: "1",
      service: "Service A",
      location: "Location 1",
      info: "Raspberry info 1",
    },
    {
      id: "2",
      service: "Service B",
      location: "Location 2",
      info: "Raspberry info 2",
    },
    {
      id: "3",
      service: "Service C",
      location: "Location 3",
      info: "Raspberry info 3",
    },
    {
      id: "4",
      service: "Service D",
      location: "Location 4",
      info: "Raspberry info 4",
    },
  ]);

  const handleSearch = (query) => {
    setSearchData(query);
  };

  const handleCheckAll = (event) => {
    const checked = event.target.checked;
    setIsCheckAll(checked);
    if (checked) {
      setIsCheck(newNodesData.map((node) => node.id));
    } else setIsCheck([]);
  };

  const handleCheck = (event) => {
    const { id, checked } = event.target;
    if (checked) {
      setIsCheck([...isCheck, id]);
    } else {
      setIsCheck(isCheck.filter((nodeId) => nodeId !== id));
    }
  };

  return (
    <>
      {isShow && <div className="modal-backdrop fade show"></div>}
      <div
        className={`modal fade ${isShow ? "show" : ""}`}
        style={{ display: isShow ? "block" : "none" }}
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Node List</h5>
              <button
                type="button"
                className="btn-close"
                onClick={hide}
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
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
                  <button
                    type="button"
                    className="btn btn-secondary"
                    id="moreFilter"
                  >
                    More Filter
                  </button>
                </div>
                <div className="col-auto pt-4">
                  <button
                    type="button"
                    className="btn btn-primary"
                    id="addNode"
                  >
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
                <ModalNodeInfo isShow={showModal} hide={handleClose} type={modalType}/>
                <div className="collapse" id="collapse">
                  <table className="table" id="tableNewNodes">
                    <thead>
                      <tr>
                        <th>
                          <input
                            id="checkAll"
                            type="checkbox"
                            checked={isCheckAll}
                            onClick={handleCheckAll}
                          />
                        </th>
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
                            <input
                              id={node.id}
                              type="checkbox"
                              checked={isCheck.includes(node.id)}
                              onClick={handleCheck}
                            />
                          </td>
                          <td onClick={() => handleShow(node.id, "new_node")}>{node.id}</td>
                          <td>{node.service}</td>
                          <td>{node.location}</td>
                          <td>
                            <button
                              className="btn btn-primary btn-sm"
                              id={node.id}
                            >
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
                  <table className="table" id="tableKnownNodes">
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
                          <td onClick={() => handleShow(node.id, "known_node")}>{node.id}</td>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalNodesList;
