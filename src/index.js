import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./AuthContext";
import './App.scss';
import './pages.scss';
//import * as serviceWorker from '../public/service-worker';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>
);

//serviceWorker.unregister();