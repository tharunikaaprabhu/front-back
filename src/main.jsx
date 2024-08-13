import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/Css/style.css';
import { ThemeProvider } from './components/theme-provider.jsx';
import './components/mode-toggle';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

    <App />
    </ThemeProvider>
  </React.StrictMode>
)
