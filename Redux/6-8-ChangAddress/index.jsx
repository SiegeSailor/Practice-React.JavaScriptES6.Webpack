import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from './redux/store.js'

ReactDOM.render(<Provider store={store}><App></App></Provider>,document.getElementById("app"))