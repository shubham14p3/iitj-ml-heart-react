// src/components/MetricDisplay.js
import React from 'react';
import { Box, Typography, Tooltip, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const customTooltipStyles = {
  componentsProps: {
    tooltip: {
      sx: {
        backgroundColor: '#333',
        color: '#fff',
        fontSize: '1.3rem',
        padding: '1.5rem',
        maxWidth: '350px',
        textAlign: 'center',
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
      },
    },
  },
};

function MetricDisplay({ label, value, description }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        {label}: {value}
      </Typography>
      <Tooltip title={description} {...customTooltipStyles}>
        <IconButton>
          <InfoIcon sx={{ color: 'primary.main' }} />
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default MetricDisplay;
