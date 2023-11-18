// Entry point for the React application


import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css';
import './constants/apiEndpoints';
import './constants/route';
import App from './App';
import HomePage from './components/pages/Home/HomePage';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <HomePage />
    
  </React.StrictMode>,
  document.getElementById('root')
);