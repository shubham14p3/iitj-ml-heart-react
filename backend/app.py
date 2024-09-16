from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from model import train_model

app = Flask(__name__)
CORS(app)  # Allow CORS for all routes

# Helper function to validate input
def validate_input(features, expected_size):
    try:
        # Ensure all features are numeric
        features = [float(x) for x in features]
        if len(features) == expected_size:
            return features
        else:
            return None
    except ValueError:
        return None

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    model_name = data['model']
    features = data['features']

    # Check the expected number of features for the model
    expected_feature_count = 11  # Set to 11 based on your training dataset

    # Validate and trim input features to match the model's expected size
    validated_features = validate_input(features[:expected_feature_count], expected_feature_count)
    if validated_features is None:
        return jsonify({'error': 'Invalid input: all features must be numeric and match the required size'}), 400

    # Convert list to pandas DataFrame
    df = pd.DataFrame([validated_features])

    # Get the predictions and metrics
    try:
        prediction, metrics = train_model(model_name, df)
    except ValueError as e:
        return jsonify({'error': str(e)}), 400

    # Convert prediction and metrics to JSON serializable format
    return jsonify({
        'Model': model_name,
        'Prediction': int(prediction),
        'Accuracy': metrics['accuracy'],
        'Precision': metrics['precision'],
        'Sensitivity': metrics['recall'],  # Same as Recall
        'Specificity': metrics['specificity'],
        'F1 Score': metrics['f1_score'],
        'ROC AUC': metrics['roc_auc'],
        'Log Loss': metrics['log_loss'],
        'Matthews Corr Coef': metrics['matthews_corrcoef']
    })

if __name__ == '__main__':
    app.run(debug=True)
