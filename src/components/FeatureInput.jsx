import React, { useState, useEffect } from 'react';
import { TextField, Grid, Typography, Box, Card, CardContent, Button, Alert, Snackbar } from '@mui/material';

// More readable names for the UI with validation rules and error messages
const featureLabels = [
  { name: "age", label: "Age (in years)", hint: "Age in years", validate: (value) => Number(value) > 0 && Number(value) <= 120, errorMessage: "Age should be between 1 and 120" },
  { name: "sex", label: "Sex (1: Male, 0: Female)", hint: "1: Male, 0: Female", validate: (value) => value === '1' || value === '0', errorMessage: "Sex must be 1 (Male) or 0 (Female)" },
  { name: "chest_pain_type", label: "Chest Pain Type", hint: "0-3 types of chest pain", validate: (value) => Number(value) >= 0 && Number(value) <= 3, errorMessage: "Chest Pain Type must be between 0 and 3" },
  { name: "resting_blood_pressure", label: "Resting Blood Pressure (mmHg)", hint: "Resting blood pressure in mmHg", validate: (value) => Number(value) >= 50 && Number(value) <= 200, errorMessage: "Resting Blood Pressure should be between 50 and 200 mmHg" },
  { name: "cholesterol", label: "Cholesterol (mg/dl)", hint: "Serum cholesterol in mg/dl", validate: (value) => Number(value) >= 100 && Number(value) <= 500, errorMessage: "Cholesterol should be between 100 and 500 mg/dl" },
  { name: "fasting_blood_sugar", label: "Fasting Blood Sugar (1 if >120 mg/dl, 0 otherwise)", hint: "1 if >120 mg/dl, 0 otherwise", validate: (value) => value === '1' || value === '0', errorMessage: "Fasting Blood Sugar must be 1 (if >120 mg/dl) or 0" },
  { name: "rest_ecg", label: "Resting ECG Results", hint: "Resting electrocardiographic results", validate: (value) => Number(value) >= 0 && Number(value) <= 2, errorMessage: "Resting ECG Results must be between 0 and 2" },
  { name: "max_heart_rate_achieved", label: "Max Heart Rate Achieved", hint: "Maximum heart rate achieved", validate: (value) => Number(value) >= 60 && Number(value) <= 220, errorMessage: "Max Heart Rate should be between 60 and 220" },
  { name: "exercise_induced_angina", label: "Exercise Induced Angina (1: Yes, 0: No)", hint: "1: Yes, 0: No", validate: (value) => value === '1' || value === '0', errorMessage: "Exercise Induced Angina must be 1 (Yes) or 0 (No)" },
  { name: "st_depression", label: "ST Depression by Exercise", hint: "ST depression induced by exercise", validate: (value) => Number(value) >= 0, errorMessage: "ST Depression must be greater than or equal to 0" },
  { name: "st_slope", label: "ST Segment Slope", hint: "The slope of the peak exercise ST segment", validate: (value) => Number(value) >= 0 && Number(value) <= 2, errorMessage: "ST Slope must be between 0 and 2" },
  { name: "target", label: "Heart Disease (1: Disease, 0: No disease)", hint: "1: Disease, 0: No disease", validate: (value) => value === '1' || value === '0', errorMessage: "Target must be 1 (Disease) or 0 (No disease)" },
];

function FeatureInput({ setFeatures, setValidationStatus }) {
  const [inputValues, setInputValues] = useState(Array(featureLabels.length).fill(''));
  const [errors, setErrors] = useState(Array(featureLabels.length).fill(''));
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Check if form is valid and pass status to parent
    const isFormValid = !errors.some((error) => error !== '') && inputValues.every((value) => value !== '');
    setValidationStatus(isFormValid);
  }, [errors, inputValues, setValidationStatus]);

  const handleChange = (index, value) => {
    const updatedValues = [...inputValues];
    updatedValues[index] = value;
    setInputValues(updatedValues);
    setFeatures(updatedValues);

    // Convert value to a number if the field requires numeric validation
    const numericFields = ['age', 'resting_blood_pressure', 'cholesterol', 'max_heart_rate_achieved', 'st_depression', 'st_slope'];
    const processedValue = numericFields.includes(featureLabels[index].name) ? Number(value) : value;

    // Validate input based on rules
    const isValid = featureLabels[index].validate(processedValue);
    const updatedErrors = [...errors];
    updatedErrors[index] = isValid ? '' : featureLabels[index].errorMessage;
    setErrors(updatedErrors);
  };

  return (
    <Card sx={{ marginTop: 4, padding: 4, boxShadow: 4 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', color: 'primary.main' }}>
          Enter Feature Data
        </Typography>

        <Grid container spacing={3}>
          {featureLabels.map((feature, index) => (
            <Grid item xs={12} sm={6} key={feature.name}>
              <TextField
                fullWidth
                label={feature.label}
                placeholder={feature.hint}
                variant="outlined"
                value={inputValues[index]}
                error={errors[index] !== ''}
                helperText={errors[index] || ''}
                onChange={(e) => handleChange(index, e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 3,
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                  },
                  '& .MuiInputLabel-root': {
                    fontWeight: 'bold',
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>

        <Snackbar open={showAlert} autoHideDuration={3000} onClose={() => setShowAlert(false)}>
          <Alert onClose={() => setShowAlert(false)} severity="error" sx={{ width: '100%' }}>
            Please fix the errors before proceeding!
          </Alert>
        </Snackbar>
      </CardContent>
    </Card>
  );
}

export default FeatureInput;
