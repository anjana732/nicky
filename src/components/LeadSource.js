import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend); 

const LeadSource = () => {
  // Example data for the chart
  const data = {
    labels: ['Email', 'Website', 'Call', 'Walk In'],
    datasets: [{
      data: [10, 20, 30, 40],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      hoverOffset: 4
    }]
  };

  return (
    <div className="lead-source-container">
      <h2>Lead Source Distribution</h2>
      <div className="pie-chart">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default LeadSource;