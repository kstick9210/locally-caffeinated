import React from "react";
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ user, handleLogout }) => {
  let nav = user ? 
    <>
      <nav className="nav-bar">
        <Link to="/"><img 
          src="https://i.imgur.com/pq3YwXH.png" 
          alt="Locally Caffeinated Logo"
          className="logo"/>
        </Link>
        <div className="nav-wrapper">
          <Link to={`/user/${user._id}`} className="nav-link">Welcome, {user.name}</Link>
          <Link to=" " onClick={handleLogout} className="nav-link">Log Out</Link>
        </div>
      </nav>
    </>
    :
    <>
      <nav className="nav-bar">
        <Link to="/"><img 
          src="https://i.imgur.com/pq3YwXH.png" 
          alt="Locally Caffeinated Logo"
          className="logo"/>
        </Link>
        <div className="nav-wrapper">
          <Link to="/login" className="nav-link">Log In</Link>
          <Link to="/signup" className="nav-link">Sign Up</Link>
        </div>
      </nav>
    </>

  return (
    nav
  );
};

export default NavBar;