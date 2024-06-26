import React from 'react';
import './UserProfile.css';

const UserProfile = () => {
  return (
    <div className="user-profile-container">
      <div className="background-cover">
        <img 
          src="https://res.cloudinary.com/drevfgyks/image/upload/v1661874917/Nature/20200113135653_IMG_2275_xvaqef.jpg" 
          alt="Background Cover" 
          className="background-cover-image"
        />
      </div>
      <div className="profile-details">
        <img 
          src="https://res.cloudinary.com/drevfgyks/image/upload/v1683714910/People/WhatsApp_Image_2023_jyqop9.jpg" 
          alt="User Profile" 
          className="profile-picture"
        />
        <h1 className="user-name">Prasanna</h1>
        <p className="user-email">Prasanna@gmail.com</p>
        <p className="user-phone">9948946658</p>
        <p className="user-education">Education: MBA</p>
        <p className="user-address">Address: Madhapur, Hyderabad</p>
      </div>
    </div>
  );
};

export default UserProfile;
