import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import 'svgxuse';
import './scss/main.scss';
import './assets/fonts/font-face.scss';

ReactDOM.render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root'),
);
