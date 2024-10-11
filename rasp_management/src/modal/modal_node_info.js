import React, { useState } from "react";

const ModalNodeInfo = () => {
  const NodeInfo = {
    nodeId: "12345",
    nodeLocation: "Building A, Room 101",
    raspberryModel: "Raspberry Pi 4 aaaaaaaaaaaaaaaaaaaaaaaaa",
    ram: "4GB",
    storage: "32GB",
    cpuUsage: "15%",
    sdrService: "Active",
    sdrDevice: "RTL-SDR",
    antenna: "Yagi-Uda",
  };

const [activeTab, setActiveTab] = useState('raspberry');
  
  return (
    <>
      {<div className="modal-backdrop fade show"></div>}
      <div
        className={`modal fade show`}
        style={{ display: "block" }}
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{NodeInfo.nodeId}</h5>
              <button type="button" className="btn-close" aria-label="Close" />
            </div>
            <div className="modal-body">
                <div className="row">
                    <p className="col-5">Node ID:</p>
                    <p className="col">{NodeInfo.nodeId}</p>
                </div>
                <div className="row">
                    <p className="col-5">Node Location:</p>
                    <p className="col">{NodeInfo.nodeLocation}</p>
                </div>

                <ul className="nav nav-tabs">
                    <li className="nav-item" role="presentation">
                        <button
                        className={`nav-link ${activeTab === 'raspberry' ? 'active' : ''}`}
                        onClick={() => setActiveTab('raspberry')}
                        >
                        Raspberry Detail
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                        className={`nav-link ${activeTab === 'sdr' ? 'active' : ''}`}
                        onClick={() => setActiveTab('sdr')}
                        >
                        SDR Detail
                        </button>
                    </li>
                </ul>
                <div className="tab-content mt-3" style={{ maxHeight: '200px', overflowY: 'auto', maxWidth:'100%',  overflowX: 'hidden', minHeight: '200px' }}>
                    <div className={`tab-pane fade ${activeTab === 'raspberry' ? 'show active' : ''}`}
                    style={{ backgroundColor: 'white', color: 'black' }}>
                        <div className="row">
                            <p className="col-5">Raspberry Model:</p>
                            <p className="col">{NodeInfo.raspberryModel}</p>
                        </div>
                        <div className="row">
                            <p className="col-5">RAM:</p>
                            <p className="col">{NodeInfo.ram}</p>
                        </div>
                        <div className="row">
                            <p className="col-5">Storage:</p>
                            <p className="col">{NodeInfo.storage}</p>
                        </div>
                        <div className="row">
                            <p className="col-5">CPU Usage:</p>
                            <p className="col">{NodeInfo.cpuUsage}</p>
                        </div>
                    </div>
                    <div className={`tab-pane fade ${activeTab === 'sdr' ? 'show active' : ''}`}
                    style={{ backgroundColor: 'white', color: 'black' }}>
                        <div className="row">
                            <p className="col-5">SDR Service:</p>
                            <p className="col">{NodeInfo.sdrService}</p>
                        </div>
                        <div className="row">
                            <p className="col-5">SDR Device:</p>
                            <p className="col">{NodeInfo.sdrDevice}</p>
                        </div>
                        <div className="row">
                            <p className="col-5">Antenna</p>
                            <p className="col">{NodeInfo.antenna}</p>
                        </div>
                        <div className="row">
                            <p className="col-5">SDR Service:</p>
                            <p className="col">{NodeInfo.sdrService}</p>
                        </div>
                        <div className="row">
                            <p className="col-5">SDR Device:</p>
                            <p className="col">{NodeInfo.sdrDevice}</p>
                        </div>
                        <div className="row">
                            <p className="col-5">Antenna</p>
                            <p className="col">{NodeInfo.antenna}</p>
                        </div>
                        <div className="row">
                            <p className="col-5">SDR Service:</p>
                            <p className="col">{NodeInfo.sdrService}</p>
                        </div>
                        <div className="row">
                            <p className="col-5">SDR Device:</p>
                            <p className="col">{NodeInfo.sdrDevice}</p>
                        </div>
                        <div className="row">
                            <p className="col-5">Antenna</p>
                            <p className="col">{NodeInfo.antenna}</p>
                        </div>
                        <div className="row">
                            <p className="col-5">SDR Service:</p>
                            <p className="col">{NodeInfo.sdrService}</p>
                        </div>
                        <div className="row">
                            <p className="col-5">SDR Device:</p>
                            <p className="col">{NodeInfo.sdrDevice}</p>
                        </div>
                        <div className="row">
                            <p className="col-5">Antenna</p>
                            <p className="col">{NodeInfo.antenna}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
                <button type="button" className="btn btn-primary me-5"><i className="fas fa-edit"></i> Edit</button>
                <button type="button" className="btn btn-primary"><i className="fas fa-desktop"></i> Monitor</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalNodeInfo;
