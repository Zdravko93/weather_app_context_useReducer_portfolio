import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { WeatherProvider } from "./context/WeatherContext";
import { ThemeProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </ThemeProvider>
);
