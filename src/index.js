import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18 and later
import './index.css'; // Importing global styles
import App from './App'; // Importing the main App component
import reportWebVitals from './reportWebVitals'; // Importing the performance measuring tool

// Creating a root element for rendering the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component within the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Measuring performance in the app
reportWebVitals();
