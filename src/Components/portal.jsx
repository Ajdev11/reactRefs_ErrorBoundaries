import React, { Component } from "react";
import ReactDOM from "react-dom";

function Portal() {
  return ReactDOM.createPortal(
    <h1>Portal nodes</h1>,
    document.getElementById("PortalRoots")
  );
}
export default Portal;
