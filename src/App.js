// App.js or HomePage.js
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import HomePage from './pages/HomePage'; 

const App = () => {
  return (
    <div>
      <ToastContainer 
        position="top-right"
        autoClose={2000} 
        hideProgressBar={false} 
        closeOnClick 
        pauseOnHover 
        draggable 
        theme="colored" 
      />
      <HomePage />
    </div>
  );
};

export default App;
