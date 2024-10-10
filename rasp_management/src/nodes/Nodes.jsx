import React from 'react'
import { Container, Grid2 } from '@mui/material';
import data from '../data.json';
import NodeCard from '../nodes/Card'; // Import the Card component
import ModalNodesList from '../components/modal_nodes_list'; // Import the ModalNodesList component
import { useState } from 'react';
import SearchBar from '../components/search_bar';
import Dropdown from "../components/dropdown";

export default function Nodes() {
    const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const [searchData, setSearchData] = useState("");
    const handleSearch = (query) => {
        setSearchData(query);
      };

  return (
    <div>
        <div>
            <h1>Nodes Page</h1>
        </div>
        <div className="row align-items-center">
            <div className="col pt-4">
                <SearchBar onSearch={handleSearch} />
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
                <button type="button" className="btn btn-secondary" id="moreFilter">
                    More Filter
                </button>
            </div>
        </div>
        <div className='d-flex justify-content-end pb-3 pt-2'>
            <button className='btn btn-primary me-1' onClick={handleShow}><i className="fa-brands fa-cloudscale"></i> Scan</button>
            <button className='btn btn-primary'><i className="fas fa-download"></i> Update Nodes</button>
        </div>
        <ModalNodesList isShow={showModal} handleClose={handleClose}/>
        <div div className='cardlist overflow-y-scroll max-h-96 pr-2' style={{ overflowY: 'auto', maxHeight: '30rem'}}>
            <Container maxWidth='xl'>
                <Grid2 container spacing={3} style={{ marginTop: "10px" }}>
                {data.nodes.map((result, index) => (
                    <Grid2 item xs={12} ms={4} key={index}>
                    <NodeCard result={result} /> {/* Use NodeCard and pass result as props */}
                    </Grid2>
                ))}
                </Grid2>
            </Container>
        </div>
    </div>
    
    
  )
}

