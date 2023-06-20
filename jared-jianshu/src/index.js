import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Button from "./Button";

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <React.StrictMode>
        <App/>
        <Button/>
    </React.StrictMode>
);
