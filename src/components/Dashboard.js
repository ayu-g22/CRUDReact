// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import { Chart, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import 'chart.js/auto';
import UsersTable from './UsersTable';

// Chart.js setup
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [chartData, setChartData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'User Activity',
        data: [30, 50, 70, 90, 120],
        borderColor: '#4F46E5',
        backgroundColor: 'rgba(79, 70, 229, 0.1)',
        fill: true,
        tension: 0.3,
      },
    ],
  });

  useEffect(() => {
    // Fetch user data and update chartData or other state as needed
  }, []);

  return (
    <div className="flex-1 p-6 space-y-6">
      
      <UsersTable />
      <Chart />
    </div>
  );
};

export default Dashboard;
