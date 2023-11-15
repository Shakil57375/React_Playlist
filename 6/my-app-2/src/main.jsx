import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Clock from './ClassComponet.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App locale = "bn-BD" />
    <Clock locale = "bn-BD" />
  </React.StrictMode>,
)
