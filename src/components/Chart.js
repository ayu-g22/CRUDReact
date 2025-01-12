import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const Chart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    fetchChartData();
  }, []);

  const fetchChartData = async () => {
    try {
      const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=30');
      const data = await response.json();

      // Extract the dates and cases from the API response
      const dates = Object.keys(data.cases);
      const cases = Object.values(data.cases);

      // Prepare the chart data
      setChartData({
        labels: dates,
        datasets: [
          {
            label: 'Daily New Cases',
            data: cases,
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
          },
        ],
      });
    } catch (error) {
      console.error('Error fetching chart data:', error);
    }
  };

  return (
    <div>
      <h2 className='text-xl font-bold mb-4'>COVID-19 Daily New Cases</h2>
      {chartData.labels ? (
        <Line data={chartData} />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

export default Chart;
