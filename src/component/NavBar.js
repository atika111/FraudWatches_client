import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/report-scam" className="nav-link">Report Scam</Link>
        </div>
    );
}

export default NavBar;
