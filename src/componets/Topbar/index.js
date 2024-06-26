import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa'; // Importing icons
import Sidebar from '../Sidebar'; // Correct import path
import './TopNavbar.css';

const Topbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="top-navbar">
        <div className="container-1_2">
          <Link to="/" className="LinkStyle">
            <img
              src="https://res.cloudinary.com/drevfgyks/image/upload/v1694333811/20230213_232002_p6djmh.png"
              className="logo"
              alt="Logo"
            />
          </Link>
          <span className="company-name">Tech nanisai</span>
          <div className="menu-links">
            <Link to="/" className="menu-link">HOME</Link>
            <Link to="/shop" className="menu-link">SHOP</Link>
            <Link to="/contact" className="menu-link">CONTACT</Link>
            <Link to="/about" className="menu-link">ABOUT US</Link>
          </div>
        </div>
        <div className="menu-toggle" onClick={handleSidebarToggle}>
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className="container-3">
          <Link to="/addcart" className="LinkStyle">
            <FaShoppingCart className="cart" />
          </Link>
          <Link to="/userprofile" className="LinkStyle">
            <FaUser className="user-profile" />
          </Link>
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={handleSidebarToggle} />
    </div>
  );
};

export default Topbar;