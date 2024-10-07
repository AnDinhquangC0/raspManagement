import React from 'react'
import { Container, Grid2 } from '@mui/material';
import data from '../data.json';
import NodeCard from '../nodes/Card'; // Import the Card component

export default function Nodes() {
  return (
    <div>
        <div>
            <h1>Nodes Page</h1>
        </div>
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

