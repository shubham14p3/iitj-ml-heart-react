
# Heart Disease Classification Application

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

This is a multi-step React-based application designed for classifying heart disease using machine learning models. The user-friendly interface guides users through each step, from data input to model selection and final prediction.

## Project Overview

The application allows users to:
- Select a machine learning model for heart disease classification.
- Input relevant medical and health features.
- Validate the data before making predictions.
- Get predictions and helpful feedback on input values.

### Features:
- **Multi-step UI:** Welcome page, model selection, input fields for data, and a prediction button.
- **Data Validation:** Ensure proper input formats with hints and example values.
- **Confirmations:** Users receive feedback before predictions are processed.
- **Assets:** All necessary images are in the `src/assets` folder.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (version 16 or higher)
- **npm** or **yarn**
- **Python** (for backend setup)
- **VS Code** or any other IDE

### Project Structure

```
/iitj-ml-heart-react
│
├── /src
│   ├── /assets
│   ├── /components
│   ├── /utils
│   └── App.js
├── /backend
│   ├── /models
│   ├── /api
│   └── app.py
├── package.json
└── README.md
```

## Setup Instructions

### Backend Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/shubham14p3/iitj-ml-heart-react.git
   ```

2. **Navigate to the Backend Directory**:
   ```bash
   cd iitj-ml-heart-react/backend
   ```

3. **Create and Activate a Virtual Environment** (Python):
   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows use `venv\Scripts\activate`
   ```

4. **Install Required Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

5. **Run the Backend API**:
   ```bash
   python app.py
   ```

   The backend should now be running on `http://localhost:5000`.

### Frontend Setup

1. **Open a New Terminal/VS Code Window** and navigate to the root directory of the project:
   ```bash
   cd iitj-ml-heart-react
   ```

2. **Install Dependencies**:
   ```bash
   npm install   # or yarn install
   ```

3. **Start the React App**:
   ```bash
   npm start     # or yarn start
   ```

   The app should now be running on `http://localhost:3000`.

## Usage

1. Launch the frontend by visiting `http://localhost:3000`.
2. Select the desired machine learning model.
3. Fill in the required medical data (hints and validations are available).
4. Click the "Predict" button to get the prediction results.
5. Review the results and use the application to experiment with different inputs.

## Screenshots

You can find the app's images in the `src/assets` folder. These images show the UI flow and model selection pages, as well as examples of predictions and feedback.

## Technologies Used

- **Frontend:** React, Material UI
- **Backend:** Flask, Scikit-learn (for the machine learning models)
- **Libraries:** Axios, Moment.js, SweetAlert2, etc.
- **Other Tools:** Webpack, Babel, ESLint

## Authors

👤 **Shubham Raj**

- Github: [@ShubhamRaj](https://github.com/shubham14p3)
- Linkedin: [Shubham Raj](https://www.linkedin.com/in/shubham14p3/)

👤 **Bhagchandani Niraj**

- Github: [@BhagchandaniNiraj](https://github.com/bhagchandaniniraj)
- Linkedin: [Niraj Bhagchandani](https://linkedin.com/in/niraj-bhagchandani-218280201)

👤 **Bhavesh Arora**

- Github: [@BhaveshArora](https://github.com/bhavesharora02)
- Linkedin: [Bhavesh Arora](https://linkedin.com/in/bhavesh-arora-11b0a319b)

👤 **Jai Singh Kushwah**

- Github: [@JaiSinghKushwah](https://github.com/jai12kushwah)
- Linkedin: [Jai Singh Kushwah](https://linkedin.com/in/jsk21)


## Future Upgrades

- Uploading and Downloading Training Data.

## 🤝 Contributing

Feel free to check the [issues page](https://github.com/shubham14p3/iitj-ml-heart-react/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Project requested by [IITJ Program](https://www.iitj.ac.in//).

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/shubham14p3/iitj-ml-heart-react.svg?style=flat-square
[contributors-url]: https://github.com/shubham14p3/iitj-ml-heart-react/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/shubham14p3/iitj-ml-heart-react.svg?style=flat-square
[forks-url]: https://github.com/shubham14p3/iitj-ml-heart-react/network/members
[stars-shield]: https://img.shields.io/github/stars/shubham14p3/iitj-ml-heart-react.svg?style=flat-square
[stars-url]: https://github.com/shubham14p3/iitj-ml-heart-react/stargazers
[issues-shield]: https://img.shields.io/github/issues/shubham14p3/iitj-ml-heart-react.svg?style=flat-square
[issues-url]: https://github.com/shubham14p3/iitj-ml-heart-react/issues