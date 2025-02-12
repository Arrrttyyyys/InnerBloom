import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">InnerBloom</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/signup">Sign Up</Link></li> {/* Sign Up Link */}
        <li><Link to="/login">Login</Link></li>   {/* Login Link */}
      </ul>
    </nav>
  );
};

export default Navbar;
