import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.neural_network import MLPClassifier
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier, AdaBoostClassifier
from xgboost import XGBClassifier
from sklearn.metrics import (
    accuracy_score, precision_score, recall_score, f1_score,
    roc_auc_score, log_loss, matthews_corrcoef, confusion_matrix
)

# Load your preprocessed dataset here
data = pd.read_csv('heart_statlog_cleveland_hungary_final.csv')

# Separate features and target
X = data.drop(columns=['target'])
y = data['target']

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Dictionary of models
models = {
    'MLP': MLPClassifier(),
    'RandomForest': RandomForestClassifier(),
    'GradientBoosting': GradientBoostingClassifier(),
    'XGBoost': XGBClassifier(),
    'AdaBoost': AdaBoostClassifier()
}

# Training function
def train_model(model_name, input_data):
    # Validate if input data has correct number of features
    if input_data.shape[1] != X_train.shape[1]:
        raise ValueError(f"Input data has {input_data.shape[1]} features, but model expects {X_train.shape[1]} features.")
    
    model = models.get(model_name)
    
    if model is None:
        raise ValueError(f"Model '{model_name}' not found. Available models: {list(models.keys())}")

    # Train the model
    model.fit(X_train, y_train)

    # Ensure input_data is reshaped correctly for prediction
    if input_data.ndim == 1:  # If a single row of data is passed
        input_data = input_data.to_numpy().reshape(1, -1)
    
    # Predict the input
    prediction = model.predict(input_data)
    
    # Evaluate model performance
    y_pred = model.predict(X_test)
    y_proba = model.predict_proba(X_test)[:, 1]  # For ROC and log loss calculations
    
    # Confusion matrix to calculate specificity
    tn, fp, fn, tp = confusion_matrix(y_test, y_pred).ravel()
    
    metrics = {
        'accuracy': accuracy_score(y_test, y_pred),
        'precision': precision_score(y_test, y_pred),
        'recall': recall_score(y_test, y_pred),  # Sensitivity
        'specificity': tn / (tn + fp),
        'f1_score': f1_score(y_test, y_pred),
        'roc_auc': roc_auc_score(y_test, y_proba),
        'log_loss': log_loss(y_test, y_proba),
        'matthews_corrcoef': matthews_corrcoef(y_test, y_pred)
    }

    return int(prediction[0]), {k: float(v) for k, v in metrics.items()}
