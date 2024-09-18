// src/pages/ResultPage.js
import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import MetricDisplay from '../components/MetricDisplay';

function ResultPage() {
  const location = useLocation(); 
  const navigate = useNavigate(); 
  const result = location.state?.result; 

  const chartData = {
    labels: ['Accuracy', 'F1 Score', 'Log Loss', 'Matthews Corr Coef', 'Precision', 'ROC AUC', 'Sensitivity', 'Specificity'],
    datasets: [
      {
        label: 'Model Metrics',
        data: [
          result.Accuracy,
          result['F1 Score'],
          result['Log Loss'],
          result['Matthews Corr Coef'],
          result.Precision,
          result['ROC AUC'],
          result.Sensitivity,
          result.Specificity,
        ],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const handleShowChart = () => {
    navigate('/chart', { state: { chartData } });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(45deg, #ff9a9e, #fad0c4, #ffd1ff)',
      }}
    >
      <Card sx={{ padding: 4, boxShadow: 6, width: '100%', maxWidth: 800 }}>
        <CardContent>
          <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', color: 'primary.main', mb: 3 }}>
            Prediction Results
          </Typography>
          {result && (
            <Box sx={{ mt: 3 }}>
              {/* Display each metric using MetricDisplay */}
              <MetricDisplay label="Prediction Score" value={result.Prediction} description="1 means patient may be suffering from heart risk and 0 means patient may be normal." />
              <MetricDisplay label="Accuracy" value={result.Accuracy} description="The proportion of correct predictions made by the model." />
              <MetricDisplay label="F1 Score" value={result['F1 Score']} description="The harmonic mean of precision and recall, measuring overall performance." />
              <MetricDisplay label="Log Loss" value={result['Log Loss']} description="Logarithmic loss representing how close the model's predictions were to the true labels." />
              <MetricDisplay label="Matthews Corr Coef" value={result['Matthews Corr Coef']} description="Correlation coefficient measuring the quality of binary classifications." />
              <MetricDisplay label="Precision" value={result.Precision} description="How many positive samples were correctly predicted as positive." />
              <MetricDisplay label="ROC AUC" value={result['ROC AUC']} description="Area under the ROC curve, showing the trade-off between true positive rate and false positive rate." />
              <MetricDisplay label="Sensitivity" value={result.Sensitivity} description="How well the model identifies true positive cases." />
              <MetricDisplay label="Specificity" value={result.Specificity} description="The proportion of true negatives identified correctly." />

              {/* Button to navigate to the chart page */}
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  mt: 4,
                  display: 'block', // Ensures it acts like a block-level element
                  margin: '0 auto', // Centers the button horizontally
                  textAlign: 'center',
                  width: '200px', // Optional: Makes the button's width fixed for better alignment
                }}
                onClick={handleShowChart}
              >
                Represent in Chart or Graph
              </Button>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

export default ResultPage;
