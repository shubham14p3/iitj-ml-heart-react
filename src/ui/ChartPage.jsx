// src/pages/ChartPage.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import ChartView from '../components/ChartView';
import Footer from './Footer';

function ChartPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const chartData = location.state?.chartData;
    console.log('chartData', chartData)
    // Function to download result as a JSON file 
    const handleDownload = () => {
        const resultData = JSON.stringify(chartData, null, 2); // Convert data to JSON format 
        const blob = new Blob([resultData], { type: 'application/json' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'result.json'; // File name 
        link.click();
    };

    return (<>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                width: '100vw',
                background: 'linear-gradient(45deg, #ff9a9e, #fad0c4, #ffd1ff)',
                padding: 4,
            }}
        >
            <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', color: 'primary.main', mb: 3 }}>
                Model Performance Chart
            </Typography>

            {/* Chart Visualization */}
            <Box sx={{ width: '80%', height: 'auto', mb: 5 }}>
                <ChartView data={chartData} />
            </Box>

            {/* Buttons for additional actions */}
            <Box sx={{ display: 'flex', gap: 2 }}>
                {/* Go Back Button */}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate(-1)} // Go back to the previous page
                    sx={{ width: '150px' }}
                >
                    Go Back
                </Button>

                {/* Restart Button */}
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => navigate('/')} // Navigate to the start page
                    sx={{ width: '150px' }}
                >
                    Start New
                </Button>

                {/* Download Button */}
                <Button
                    variant="contained"
                    color="success"
                    onClick={handleDownload} // Call the download function
                    sx={{ width: '150px' }}
                >
                    Download Result
                </Button>
            </Box>
        </Box>
        <Footer/>
    </>
    );
}

export default ChartPage;
