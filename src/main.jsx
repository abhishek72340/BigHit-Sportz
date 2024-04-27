import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Context/product-context";
import { Toaster } from "react-hot-toast";
<Toaster position="top-center" reverseOrder={false} />;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Toaster />
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
