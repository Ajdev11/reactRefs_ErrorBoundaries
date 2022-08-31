import React, { Component } from "react";
import ReactDOM from "react-dom";

function Portal() {
  return ReactDOM.createPortal(
    <h1>Portal nodes</h1>,
    document.getElementById("PortalRoots")
  );
}
export default Portal;
//The React portals helps us to render children to the Dom tree that
//exist utside the Parent tree
//pRovides the ability to breakout of the parent tree