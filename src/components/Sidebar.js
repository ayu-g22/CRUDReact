// src/components/Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-900 h-screen p-4 text-white">
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <ul className="mt-8 space-y-4">
        <li>
          <a href="#" className="text-gray-300 hover:text-white">Dashboard</a>
        </li>
        <li>
          <a href="#" className="text-gray-300 hover:text-white">Users</a>
        </li>
        <li>
          <a href="#" className="text-gray-300 hover:text-white">Settings</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
