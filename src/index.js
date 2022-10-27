import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import App from './App'
import './style.css';

const root = createRoot(document.getElementById('root'))

root.render(
  <Router>
    <App />
  </Router>
)
