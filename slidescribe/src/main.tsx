import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css';
import './constants/apiEndpoints';
import './constants/route';
import App from './App';
import HomePage from './components/pages/Home/HomePage';
// import authContext from './context/AuthContext';
// import useFetch from './hooks/useFetch';
// import apiService from './services/apiService';
// import formatDate from './utils/formatDate';
// import homeView from './views/HomeView';

// import AboutPage from './components/pages/About/AboutPage';
// import AuthPage from './components/pages/Auth/AuthPage';
// import Dashboard Page from './components/pages/Dashboard/DashboardPage';
// import HomePage from './components/pages/Home/HomePage';

// const App: React.FC = () => {
//   return (
//     <div>
//       <HomePage />
//       <AboutPage />
//       <AuthPage />
//       <DashboardPage />
//     </div>
//   );
// };

ReactDOM.render(
  <React.StrictMode>
    <App />
    <HomePage />
    
  </React.StrictMode>,
  document.getElementById('root')
);