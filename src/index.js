import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import "typeface-lato";

ReactDOM.render(
  routes,
  document.getElementById('root')
);
