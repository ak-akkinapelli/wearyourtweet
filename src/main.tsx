import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Assuming you have a global stylesheet

import Root from './routes/root';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
