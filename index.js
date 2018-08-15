import React from "react";
import ReactDOM from "react-dom";
import App from "./lib/app";

require('dotenv').config();

ReactDOM.render(<App />, document.getElementById("app"));