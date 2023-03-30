import React from 'react';
import ReactDOM from 'react-dom/client';
import Siriboi from './Siriboi'
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/index.scss'
import './library/fontawesome'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Siriboi />
  </React.StrictMode>
);

