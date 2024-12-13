import React from "react";
import ReactDOM from "react-dom/client"; // Updated import for React 18+
import "./index.css";
import App from "./App";

// React 18+ way to render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
