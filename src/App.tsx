import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Boundary from './boundary';
import FrontPage from './pages/frontPage';
import LoginPage from './pages/loginPage';
import PageError from './pages/pageError';
import PageNotFound from './pages/pageNotFound';
import './scss/App.scss';

function App() {
  console.log('Running App()...');
  
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Boundary stateTrace fallback={(props) => (
        <PageError children={props.children} />
      )}>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="/" element={<FrontPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Boundary>
    </Router>
  );
}

export default App;
