import React, { useState } from 'react';
import { Box, Button, Typography, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ModelSelector from '../components/ModelSelector';
import FeatureInput from '../components/FeatureInput';
import { predict } from '../services/api';

const featureLabels = [
  { name: "age", label: "Age (in years)", hint: "Age in years" },
  { name: "sex", label: "Sex (1: Male, 0: Female)", hint: "1: Male, 0: Female" },
  { name: "chest_pain_type", label: "Chest Pain Type", hint: "0-3 types of chest pain" },
  { name: "resting_blood_pressure", label: "Resting Blood Pressure (mmHg)", hint: "Resting blood pressure in mmHg" },
  { name: "cholesterol", label: "Cholesterol (mg/dl)", hint: "Serum cholesterol in mg/dl" },
  { name: "fasting_blood_sugar", label: "Fasting Blood Sugar (1 if >120 mg/dl, 0 otherwise)", hint: "1 if >120 mg/dl, 0 otherwise" },
  { name: "rest_ecg", label: "Resting ECG Results", hint: "Resting electrocardiographic results" },
  { name: "max_heart_rate_achieved", label: "Max Heart Rate Achieved", hint: "Maximum heart rate achieved" },
  { name: "exercise_induced_angina", label: "Exercise Induced Angina (1: Yes, 0: No)", hint: "1: Yes, 0: No" },
  { name: "st_depression", label: "ST Depression by Exercise", hint: "ST depression induced by exercise" },
  { name: "st_slope", label: "ST Segment Slope", hint: "The slope of the peak exercise ST segment" },
  { name: "target", label: "Heart Disease (1: Disease, 0: No disease)", hint: "1: Disease, 0: No disease" },
];

function Home() {
  const [step, setStep] = useState(1);
  const [model, setModel] = useState('');
  const [features, setFeatures] = useState([]);
  const [isValid, setIsValid] = useState(false); // Track validation status
  const navigate = useNavigate();

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handlePredict = async () => {
    const response = await predict(model, features);
    navigate('/result', { state: { result: response.data } });
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
      {/* Step 1: Welcome Screen */}
      {step === 1 && (
        <Card sx={{ padding: 4, boxShadow: 6 }}>
          <CardContent>
            <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', color: 'primary.main' }}>
              Welcome to Heart Disease Prediction
            </Typography>
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{ mt: 4, display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
            >
              Start
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Model Selection */}
      {step === 2 && (
        <Card sx={{ padding: 4, boxShadow: 6 }}>
          <CardContent>
            <Typography variant="h5" sx={{ textAlign: 'center', color: 'primary.main' }}>
              Select a Model
            </Typography>
            <ModelSelector setModel={setModel} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
              <Button variant="contained" onClick={handleBack}>
                Go Back
              </Button>
              <Button variant="contained" onClick={handleNext} disabled={!model}>
                Next
              </Button>
            </Box>
          </CardContent>
        </Card>
      )}

      {/* Step 3: Feature Input with Selected Model */}
      {step === 3 && (
        <Card sx={{ padding: 4, boxShadow: 6, width: '100%', maxWidth: 800 }}>
          <CardContent>
            <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', color: 'primary.main' }}>
              Selected Model: {model}
            </Typography>
            <FeatureInput setFeatures={setFeatures} setValidationStatus={setIsValid} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
              <Button variant="contained" onClick={handleBack}>
                Go Back
              </Button>
              <Button variant="contained" onClick={handleNext} disabled={!isValid}>
                Confirm Data
              </Button>
            </Box>
          </CardContent>
        </Card>
      )}

      {/* Step 4: Confirm and Predict */}
      {step === 4 && (
        <Card sx={{ padding: 4, boxShadow: 6, width: '100%', maxWidth: 800 }}>
          <CardContent>
            <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', color: 'primary.main' }}>
              Confirm Your Data
            </Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Selected Model: {model}
            </Typography>

            {/* Display each feature with its corresponding label */}
            <Box sx={{ mt: 2 }}>
              {features.map((feature, index) => (
                <Typography key={index} sx={{ mt: 1 }}>
                  <strong>{featureLabels[index]?.label}: </strong> {feature}
                </Typography>
              ))}
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
              <Button variant="contained" onClick={handleBack}>
                Go Back
              </Button>
              <Button variant="contained" onClick={handlePredict} sx={{ ml: 2 }}>
                Predict
              </Button>
            </Box>
          </CardContent>
        </Card>
      )}
    </Box>
  );
}

export default Home;
