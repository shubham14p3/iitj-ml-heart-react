import React, { useState } from 'react';
import { Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const models = [
  {
    name: "MLP",
    description: (
      <>
        <ul style={{ textAlign: 'left' }}>
          <li>Multi-layer Perceptron (MLP) is a type of feedforward artificial neural network.</li>
          <li>Used for classification and regression tasks.</li>
          <li>It contains multiple layers of nodes, each fully connected to the next one.</li>
          <li>Uses backpropagation for training the model.</li>
          <li><strong>Formula:</strong> Output = Activation(∑(Weights * Inputs) + Bias)</li>
        </ul>
      </>
    ),
  },
  {
    name: "RandomForest",
    description: (
      <>
        <ul style={{ textAlign: 'left' }}>
          <li>Random Forest is an ensemble learning method.</li>
          <li>It builds multiple decision trees and merges them for better accuracy and stability.</li>
          <li>Effective for both classification and regression tasks.</li>
          <li>Reduces overfitting compared to individual decision trees.</li>
          <li><strong>Formula:</strong> Final Output = Majority Vote of all decision trees.</li>
        </ul>
      </>
    ),
  },
  {
    name: "GradientBoosting",
    description: (
      <>
        <ul style={{ textAlign: 'left' }}>
          <li>Gradient Boosting is an ensemble technique that builds models sequentially.</li>
          <li>Each new model corrects errors made by the previous one.</li>
          <li>Works well with both classification and regression problems.</li>
          <li>Focuses on difficult-to-predict samples.</li>
          <li><strong>Formula:</strong> New Prediction = Previous Prediction + Learning Rate * Error Correction</li>
        </ul>
      </>
    ),
  },
  {
    name: "XGBoost",
    description: (
      <>
        <ul style={{ textAlign: 'left' }}>
          <li>XGBoost stands for Extreme Gradient Boosting.</li>
          <li>It is optimized for speed and performance, especially on large datasets.</li>
          <li>Handles missing values and provides parallelization during training.</li>
          <li>Regularization to prevent overfitting.</li>
          <li><strong>Formula:</strong> Loss = Objective Function + Regularization Term</li>
        </ul>
      </>
    ),
  },
  {
    name: "AdaBoost",
    description: (
      <>
        <ul style={{ textAlign: 'left' }}>
          <li>AdaBoost stands for Adaptive Boosting.</li>
          <li>It combines weak classifiers into a strong classifier.</li>
          <li>Each classifier is trained to correct errors from the previous one.</li>
          <li>Effective for binary classification problems.</li>
          <li><strong>Formula:</strong> Final Classifier = Sum of Weighted Weak Classifiers</li>
        </ul>
      </>
    ),
  },
];

function ModelSelector({ setModel }) {
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedDescription, setSelectedDescription] = useState('');

  const handleModelChange = (e) => {
    const modelName = e.target.value;
    setSelectedModel(modelName);
    const model = models.find((model) => model.name === modelName);
    setSelectedDescription(model ? model.description : '');
    setModel(modelName);  // Pass the selected model back to the parent component
  };

  return (
    <Box
      sx={{
        p: 4,
        borderRadius: 2,
        backgroundColor: '#f5f5f5',
        width: '600px',          // Adjusted width for more content space
        minHeight: '450px',      // Minimum height to prevent shrinking
        height: 'auto',          // Static height with some flexibility
        margin: '20px auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <FormControl fullWidth variant="outlined" sx={{ mb: 3 }}>
        <InputLabel>Select Model</InputLabel>
        <Select
          value={selectedModel}
          onChange={handleModelChange}
          label="Select Model"
          sx={{ fontSize: '1.2rem', padding: '12px' }}
        >
          {models.map((model) => (
            <MenuItem key={model.name} value={model.name}>
              {model.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {selectedModel && (
        <Box
          sx={{
            mt: 4,
            p: 3,
            backgroundColor: '#e0f7fa',
            borderRadius: 2,
            width: '100%',          // Make the description container fit the width
            textAlign: 'left'        // Left-align the description for readability
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#00796b', fontSize: '1.5rem' }}>
            {selectedModel} Model
          </Typography>
          <Typography variant="body1" sx={{ color: '#004d40', fontSize: '1.2rem' }}>
            {selectedDescription}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default ModelSelector;
