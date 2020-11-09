import React from "react";
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav className="nav-bar">
      <div className="logo-name-wrapper">
        <Link to="/" className="logo-name-link">
          <img 
          src="https://i.imgur.com/J0GyZIF.png" 
          alt="Locally Caffeinated Logo"
          className="logo"/>
          <h1 className="app-name">Locally Caffeinated</h1>
        </Link>
      </div>
      <Link to="/search" className="nav-link underline">Search for Coffee Shops</Link>
      {user ? 
        <div className="nav-wrapper">
          <Link to={`/user/${user._id}`} className="nav-link underline">Welcome, {user.name}</Link>
          <Link to=" " onClick={handleLogout} className="nav-link underline">Log Out</Link>
          <Link to="/search" className="nav-link underline">Search</Link>
        </div>
        :
        <div className="nav-wrapper">
          <Link to="/login" className="nav-link underline">Log In</Link>
          <Link to="/signup" className="nav-link underline">Sign Up</Link>
        </div>
      }
    </nav>
  );
};

export default NavBar;