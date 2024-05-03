import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthContextProvider } from './contexts/AuthContext.tsx'
import { SocketProvider } from './contexts/SocketContext.tsx'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <AuthContextProvider>
      <SocketProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>,
      </SocketProvider>
    </AuthContextProvider>
  </Router>
)
