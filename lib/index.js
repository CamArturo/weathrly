import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
require("dotenv").config();
require("dotenv").load();

ReactDOM.render(<App />, document.getElementById('app'));