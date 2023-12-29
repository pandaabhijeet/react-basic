import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Map from './Map.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Conditions from './Conditions.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Map />
    <Conditions />
  </React.StrictMode>
)
