import React from "react";
import UsersTable from "./components/UsersTable";
import Chart from "./components/Chart";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex flex-1 p-6 space-x-6">
          {/* Users Table */}
          <div className="w-1/2 p-2">
            <UsersTable />
          </div>
          
          {/* Chart */}
          <div className="w-1/2">
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
