// Author : Suman Roy @github.com/Suman373 
// Date : 4.07.2022
// A user password auth without backend 
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthContext, { AuthProvider } from './context/AuthProvider';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* wrap the App with the AuthProvider -> higher order context, which helps to provide authentication to all the children components */}
    <AuthProvider>
    <App />
    </AuthProvider>
  </React.StrictMode>
);
reportWebVitals();
