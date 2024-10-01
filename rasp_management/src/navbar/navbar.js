import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to="/overview" className="nav-link" activeClassName="active">
                Overview
            </NavLink>
            <NavLink to="/nodes" className="nav-link" activeClassName="active">
                Nodes
            </NavLink>
            <NavLink to="/services" className="nav-link" activeClassName="active">
                Services
            </NavLink>
            <NavLink to="/logs" className="nav-link" activeClassName="active">
                Logs
            </NavLink>
        </div>
    );
};

export default Navbar;
