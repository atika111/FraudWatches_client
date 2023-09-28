import React from "react";
import { Link } from "react-router-dom";
import OpeningPage from "./OpeningPage";

const NavBar = ({ user }) => {
  return (
    <div className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/report-scam" className="nav-link">
        Report Scam
      </Link>
      {user ? (
        <Link to="/login" className="nav-link">
          Logout
        </Link>
      ) : (
        <Link to="/login" className="nav-link">
          Login
        </Link>
      )}
    </div>
  );
};

export default NavBar;
