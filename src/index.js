import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import './styles.scss';
import "./services/i18n";

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app'));
