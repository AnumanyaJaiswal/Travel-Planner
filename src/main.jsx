import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './Context/AuthContext.jsx'
import { SavedDestinationProvider } from './Context/SavedDestinationContext.jsx'

import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <SavedDestinationProvider>
        <App />
      </SavedDestinationProvider>
    </AuthProvider>
  </BrowserRouter>
)