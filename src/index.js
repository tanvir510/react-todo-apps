import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/css/customfont.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./assets/sass/main.scss";
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( < App / > , document.getElementById('root'));
serviceWorker.unregister();