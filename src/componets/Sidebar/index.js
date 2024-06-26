import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa'; // Import FaUser icon
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isShopOpen, setIsShopOpen] = useState(false);

  const handleShopToggle = () => {
    setIsShopOpen(!isShopOpen);
  };

  const handleSubmenuClick = (action) => {
    action();
    toggleSidebar();
  };

  const handleUserProfileClick = () => {
    toggleSidebar(); // Close the sidebar when user profile is clicked
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-content">
        <ul className="menu">
          <Link to="/" className='LinkStyle'><li onClick={toggleSidebar}>HOME</li></Link>
          <li onClick={handleShopToggle} className="shop">
            SHOP
            {isShopOpen && (
              <ul className="submenu">
                <Link to="/route1" className='LinkStyle'><li onClick={() => handleSubmenuClick(toggleSidebar)}>Route 1</li></Link>
                <Link to="/route2" className='LinkStyle'><li onClick={() => handleSubmenuClick(toggleSidebar)}>Route 2</li></Link>
                <Link to="/route3" className='LinkStyle'><li onClick={() => handleSubmenuClick(toggleSidebar)}>Route 3</li></Link>
              </ul>
            )}
          </li>
          <Link to="/route1" className='LinkStyle'><li onClick={toggleSidebar}>CONTACT</li></Link>
          <Link to="/route4" className='LinkStyle'><li onClick={toggleSidebar}>ABOUT US</li></Link>
        </ul>
        <Link to="/userprofile" className='LinkStyle'><div className="user-profile2" onClick={handleUserProfileClick}>
          <FaUser />
          <span>User Profile</span>
        </div></Link>
      </div>
    </div>
  );
};

export default Sidebar;
