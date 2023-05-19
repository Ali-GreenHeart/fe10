import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import { BrowserRouter } from 'react-router-dom';
import "./index.css"
import AuthContextProvider from './context/AuthContext';
import ModeContextProvider from './context/ModeContext';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './reducers/redux';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(rootReducer)

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ModeContextProvider>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </ModeContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
