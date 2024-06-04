import React from "react";

import "../stylesheets/loading.scss";

import LinearProgress from "@mui/material/LinearProgress";

const Loading = () => {
  return (
    <div className="loading-container">
      <LinearProgress />

      <div className="loading-wrapper">
        Please wait a moment while we fetch user data.
      </div>
    </div>
  );
};

export default Loading;
