import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './componets/Home';
import Route1 from './componets/Route1';
import Route2 from './componets/Route2';
import Route3 from './componets/Route3';
import Route4 from './componets/Route4';
import Sidebar from './componets/Sidebar';
import TopNavbar from './componets/Topbar';
import AddCart from './componets/addCart';
import UserProfile from './componets/Userprofile';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <TopNavbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/route1" element={<Route1 />} />
            <Route path="/route2" element={<Route2 />} />
            <Route path="/route3" element={<Route3 />} />
            <Route path="/route4" element={<Route4 />} />
            <Route path="/addcart" element={<AddCart/>} />
            <Route path="/userprofile" element={<UserProfile/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
