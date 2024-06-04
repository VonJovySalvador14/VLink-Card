import React from "react";
import ReactDOM from "react-dom/client";
import App from "./script/App.jsx";

import { BrowserRouter } from "react-router-dom";

import Routes from "./script/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>{Routes}</BrowserRouter>
);
