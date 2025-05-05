import React from 'react';
import {createRoot} from 'react-dom/client'
import './styles/custom.css'
import Router from "./router/Router.jsx";
createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router/>
    </React.StrictMode>
);