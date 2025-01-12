import React from 'react';
import UsersTable from './components/UsersTable';
import BarChart from './components/BarChart';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="container mx-auto p-6">
      <Navbar />
      <div className="flex space-x-6">
        <Sidebar />
        <div className="w-1/2 p-2">
          <UsersTable />
        </div>
        <div className="w-1/2">
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default App;
