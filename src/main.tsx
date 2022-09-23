import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import '@/styles/index.css';

/* A way to render the app. */
const root = ReactDOM.createRoot(
    document.getElementById('root') || document.createElement('div'),
);

root.render(
    <React.StrictMode key="strictMode">
        <BrowserRouter key="browserRouter">
            <Router key="route" />
        </BrowserRouter>
    </React.StrictMode>,
);
