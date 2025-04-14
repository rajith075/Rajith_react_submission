import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the '/client' import
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

// Create a root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app
root.render(<App />);