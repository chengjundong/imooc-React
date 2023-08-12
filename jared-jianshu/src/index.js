import React from 'react';
import ReactDOM from 'react-dom/client';
import ToggleText from "./ToggleText";

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    // JSX，使用自定义标签引用组件，首字母大写
    <React.StrictMode>
        <ToggleText/>
    </React.StrictMode>
);
