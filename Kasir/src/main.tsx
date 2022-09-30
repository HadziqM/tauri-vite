import React from "react";
import ReactDOM from "react-dom/client";
import Test from "./component/test";
import Page from "./page";
import "./index.css";
import "./assets/App.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);
