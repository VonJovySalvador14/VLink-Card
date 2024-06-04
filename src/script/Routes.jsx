import React from "react";

import { Routes, Route } from "react-router";

import App from "./App";

const routes = (
  <Routes>
    <Route element={<App />} path="/:uid" />
  </Routes>
);

export default routes;
