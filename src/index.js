import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.css';
import './Component/custom.css';
import InteractiveBackground from './Component/Home';
import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <InteractiveBackground/>
    </Router>
  </React.StrictMode>
);

