import React from "react";
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ user, handleLogout }) => {
  let nav = user ? 
    <>
      <nav className="nav-bar">
        <div className="nav-wrapper">
          <ul className="right">
            <li>
              <Link to={`/user/${user._id}`} className="nav-link">Welcome, {user.name}</Link>
            </li>
            <li>
              <Link to=" " onClick={handleLogout} className="nav-link">Log Out</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
    :
    <>
      <nav className="nav-bar">
        <div className="nav-wrapper">
          <ul className="right">
            <li>
              <Link to="/login" className="nav-link">Log In</Link>
            </li>
            <li>
              <Link to="/signup" className="nav-link">Sign Up</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>

  return (
    nav
  );
};

export default NavBar;