import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'; 
import Navbar from './navbar/navbar'; 

const Overview = () => <h1>Overview Page</h1>;
const Nodes = () => <h1>Nodes Page</h1>;
const Services = () => <h1>Services Page</h1>;
const Logs = () => <h1>Logs Page</h1>;

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />  
                <div className="content">
                    <Routes>
                        {/* Định nghĩa các route */}
                        <Route path="/overview" element={<Overview />} />
                        <Route path="/nodes" element={<Nodes />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/logs" element={<Logs />} />
                        
                        {/* Chuyển hướng đến trang Overview khi truy cập root ("/") */}
                        <Route path="/" element={<Navigate to="/overview" />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
