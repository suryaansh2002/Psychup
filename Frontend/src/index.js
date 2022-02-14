import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Editor from "./components/Editor/Editor";
import { CookiesProvider } from "react-cookie";


ReactDOM.render(
  <CookiesProvider>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </CookiesProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
