import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import { BrowserRouter } from 'react-router-dom';
import "./index.css"
import AuthContextProvider from './context/AuthContext';
import ModeContextProvider from './context/ModeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <ModeContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ModeContextProvider>
  </BrowserRouter>
);
