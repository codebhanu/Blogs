import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.css';
import './Component/custom.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Blogs from './Component/Blogs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
     <App></App>
    </Router>
  </React.StrictMode>
);

