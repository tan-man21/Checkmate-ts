import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Sidebar from "./components/Sidebar";
import Checklist from "./components/Checklist";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <Checklist />
{/*       <App /> */}
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
