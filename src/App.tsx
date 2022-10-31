import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import FrontPage from './pages/frontPage';
import LoginPage from './pages/loginPage';
import PageNotFound from './pages/pageNotFound';
import './scss/App.scss';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<FrontPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
