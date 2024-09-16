import axios from "axios";

// Function to send POST request to Flask API
export const predict = (model, features) => {
  return axios.post("http://127.0.0.1:5000/predict", {
    model: model,
    features: features,
  });
};