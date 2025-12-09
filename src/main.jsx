import React from "react";
import ReactDOM from "react-dom/client";
//import { BrowserRouter } from "react-router-dom"; - для разработки
import App from "./App";
import "antd/dist/reset.css";
import "./assets/styles/antd-custom.css";
import "./App.css";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
