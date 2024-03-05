import React from 'react';
import {hydrateRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App.jsx';
import { AuthProvider } from './context/AuthProvider.js';

hydrateRoot(document.getElementById('root'),
    <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </AuthProvider>);