import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css"
import { Routes } from './routes/routes.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Routes />
)
