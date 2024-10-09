// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './navbar.css';

// const Navbar = () => {
//     return (
//         <div className="navbar">
//             <NavLink to="/overview" className="nav-link" activeClassName="active">
//                 Overview
//             </NavLink>
//             <NavLink to="/nodes" className="nav-link" activeClassName="active">
//                 Nodes
//             </NavLink>
//             <NavLink to="/services" className="nav-link" activeClassName="active">
//                 Services
//             </NavLink>
//             <NavLink to="/logs" className="nav-link" activeClassName="active">
//                 Logs
//             </NavLink>
//         </div>
//     );
// };

// export default Navbar;
import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink 
                to="/overview" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Overview
            </NavLink>
            <NavLink 
                to="/nodes" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Nodes
            </NavLink>
            <NavLink 
                to="/services" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Services
            </NavLink>
            <NavLink 
                to="/logs" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Logs
            </NavLink>
        </div>
    );
};

export default Navbar;
