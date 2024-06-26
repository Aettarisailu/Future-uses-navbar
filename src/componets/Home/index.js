import React from 'react';
import './HomePage.css';
import Route1 from '../Route1';
import Route2 from '../Route2';
import Route3 from '../Route3';
import { FaHtml5, FaPython } from 'react-icons/fa'; // Importing icons

const Home = () => {
  return (
    <>
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Our Store</h1>
        <p>Your one-stop shop for all your Course and PDF's needs!</p>
        <button className="shop-button">Shop Now</button>
      </div>        
      <div className='products_container'>               
        <div className='product_container-1'>
          <FaHtml5 className="html-icon"/>
          <div className='product_pricing_container'>
            <p className='product-typ'>PDF</p>
            <p className='pricing'>Free</p>
          </div>
          <button className='product-buybutton'>View Now</button>        
        </div>
        <div className='product_container-1'>
          <FaPython className="html-icon python"/>
          <div className='product_pricing_container'>
            <p className='product-typ'>PDF</p>
            <p className='pricing'>RS.99/-</p>
          </div>
          <button className='product-buybutton'>View Now</button>        
        </div>                        
      </div>      
      <div>
          <p className='domain'>www.nanisai.com</p>
      </div>           
    </div>
      <Route1/>
      <Route2/>
      <Route3/>
    </>
  );
};

export default Home;
