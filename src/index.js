import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./style.css";
import "./custom.css";
import { BrowserRouter as Router } from "react-router-dom";

import Test from "./Component/Test";
import App from "./App.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);
