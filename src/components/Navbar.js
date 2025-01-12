// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-white shadow-md px-6 py-4">
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-800">Menu</button>
        <span className="text-lg font-semibold text-gray-800">Dashboard</span>
      </div>
      <div>
        <button className="text-gray-600 hover:text-gray-800">Log out</button>
      </div>
    </div>
  );
};

export default Navbar;
