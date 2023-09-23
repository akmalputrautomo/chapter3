import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/css/index.css";
import { Routerlist } from "./routes/routerlist";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routerlist />
  </React.StrictMode>
);
