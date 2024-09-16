// src/components/ChartView.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ChartView({ data }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Model Performance Metrics',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Box
      sx={{
        mt: 5,
        width: '80%',          // Set the width to 80% of the parent container
        maxWidth: '1200px',     // Set a maximum width for larger screens
        margin: '0 auto',       // Center the chart horizontally
      }}
    >
      <Typography variant="h5" sx={{ textAlign: 'center', mb: 3, fontWeight: 'bold' }}>
        Model Metrics Visualization
      </Typography>
      <Bar data={data} options={options} />
    </Box>
  );
}

export default ChartView;
