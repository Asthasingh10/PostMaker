import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './store/auth';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
   <Auth0Provider
    domain="asthasingh.us.auth0.com"
    clientId="E0SR01IHYqrBluXU3MFGsUnYJosozVWW"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    </Auth0Provider>
    </AuthProvider>
  </React.StrictMode>
);
reportWebVitals();