import React from 'react';
import ReactDOM from 'react-dom';

// Import main container components for each page
import AboutPage from './components/pages/About/AboutPage';
import AuthPage from './components/pages/Auth/AuthPage';
import DashboardPage from './components/pages/Dashboard/DashboardPage';
import HomePage from './components/pages/Home/HomePage';

const App: React.FC = () => {
  return (
    <div>
      {/* Render the main container components for each page */}
      <AboutPage />
      <AuthPage />
      <DashboardPage />
      <HomePage />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
