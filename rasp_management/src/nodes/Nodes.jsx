import React from 'react'
import { Container, Grid2 } from '@mui/material';
import data from '../data.json';
import NodeCard from '../nodes/Card'; // Import the Card component
import ModalNodesList from '../components/modal_nodes_list'; // Import the ModalNodesList component
import { useState } from 'react';

export default function Nodes() {
    const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

  return (
    <div>
        <div>
            <h1>Nodes Page</h1>
        </div>
        <div className='d-flex justify-content-end pb-3'>
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

