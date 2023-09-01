import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.css";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./utils/UserContext.jsx";
import { BasketProvider } from "./utils/BasketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <BasketProvider>
          <App />
        </BasketProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
