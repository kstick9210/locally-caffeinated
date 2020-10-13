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
      {user ? 
        <div className="nav-wrapper">
          <Link to={`/user/${user._id}`} className="nav-link">Welcome, {user.name}</Link>
          <Link to=" " onClick={handleLogout} className="nav-link">Log Out</Link>
        </div>
        :
        <div className="nav-wrapper">
          <Link to="/login" className="nav-link">Log In</Link>
          <Link to="/signup" className="nav-link">Sign Up</Link>
        </div>
      }
    </nav>
  );
};

export default NavBar;